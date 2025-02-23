import styles from "./CreatingProjectPage.module.scss"
import { Link } from "react-router"
import leftArrow from "./assets/leftArrow.svg"
import plus from "./assets/plus.svg"
import xicon from "./assets/xicon.svg"
import { useState } from "react"
import { useDropzone } from 'react-dropzone'

interface PhotoFile {
    file?: File;
    name: string;
    preview?: string;
}//вопросики на будущее, чтоб не забыть. Пока сделал обрезано и без нормального дизайна при добавленных файлах. Попрошу дизайнеров сделать


export const CreatingProjectPage = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState(["aboba", "1"])
    const [resources, setResources] = useState(["aboba", "adobe"])

    const [photos, setPhotos] = useState<PhotoFile[]>([])
    const [cover, setCover] = useState<PhotoFile>()

    const removeItem = <T,>(array: T[], item: T, setArray: React.Dispatch<React.SetStateAction<T[]>>) => {
        setArray(array.filter(element => element !== item)) // функция удаления для галочки, потом переделать. Хз просто что будет с сервака приходить вместе с тегами
    }

    const { getRootProps: getRootPhotosProps, getInputProps: getInputPhotosProps } = useDropzone({
        accept: {
            'image/png': ['.png', '.jpg', '.jpeg']
        },
        multiple: true,
        maxFiles: 5,
        onDrop: (acceptedFiles) => {
            const newPhotos = acceptedFiles.map(file => ({
                name: file.name,
            }));
            setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
        },
    });

    const { getRootProps: getRootCoverProps, getInputProps: getInputCoverProps } = useDropzone({
        accept: {
            'image/png': ['.png', '.jpg', '.jpeg']
        },
        multiple: false,
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                setCover({
                    name: file.name,
                });
            }
        },
    });

    return (
        <div className={styles.container}>
            <Link to="/profile" className={styles.backButton}>
                <img src={leftArrow} alt="back" className={styles.arrow} />
                Вернуться к выбору
            </Link>

            <h2>Создание проекта</h2>


            <div className={styles.dropzone} {...getRootPhotosProps()}>
                <img src={plus} alt="Добавить изображение" className={styles.plus} />
                <input {...getInputPhotosProps()} />
                {photos.map(photo => <span>{photo.name}</span>)}
                <p className={styles.paragraph}>Перетащите чтобы добавить</p>
            </div>


            <div className={styles.infoContainer}>
                <div className={styles.titleDescription}>
                    <h3>Название</h3>
                    <input
                        className={styles.titleInput}
                        type="text"
                        placeholder="Введите название проекта"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        maxLength={50}
                    />

                    <h3>Описание</h3>
                    <textarea
                        className={styles.descriptionInput}
                        placeholder="Расскажите о проекте"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />

                </div>
                <div className={styles.dropzoneCoverContainer}>
                    <div className={styles.dropzoneCover} {...getRootCoverProps()}>
                        <img src={plus} alt="Добавить изображение" className={styles.plus} />
                        <input {...getInputCoverProps()} />
                        {cover?.name}
                        <p className={styles.paragraph}>Загрузите обложку</p>
                    </div>
                </div>
            </div>

            <div className={styles.tagsResourcesSection}>
                <div className={styles.tagsContainer}>
                    <h2>Теги</h2>
                    <div className={styles.itemsContainer}>
                        {tags.map((tag) => (
                            <div key={tag} className={styles.tag}>
                                {tag}
                                <img
                                    src={xicon}
                                    alt="Удалить"
                                    className={styles.xIcon}
                                    onClick={() => removeItem(tags, tag, setTags)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.ResourcesContainer}>
                    <h2>Ресурсы</h2>
                    <div className={styles.itemsContainer}>
                        {resources.map((resource) => (
                            <div key={resource} className={styles.resource}>
                                {resource}
                                <img
                                    src={xicon}
                                    alt="Удалить"
                                    className={styles.xIcon}
                                    onClick={() => removeItem(resources, resource, setResources)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button className={styles.createProjectButton}>
                Создать проект
            </button>
        </div>
    )
}