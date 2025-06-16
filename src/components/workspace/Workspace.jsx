import OptimizedImage from '../../common/optimized-image/OptimizedImage'
import { WORKSPACE_ITEMS, WORKSPACE_MAIN_IMAGES } from '../../constants/workspace'
import './workspace.css'

const Workspace = () => {
    return (
        <section id="workspace">
            <div className="workspace__container">
                <h2 className="workspace__title">My Workspace</h2>
                <p className="workspace__intro">
                    As a developer, I’ve spent countless hours building, refining, and customizing
                    my workspace to help me stay productive and inspired. This section is a personal
                    overview of the tools I use every day—whether I’m coding, writing, or simply
                    exploring ideas. Each item has its place and purpose, and together they form the
                    environment where I bring my projects to life.
                </p>

                <div className="workspace__image-wrapper">
                    {WORKSPACE_MAIN_IMAGES.map(({ id, alt, image, webp }) => (
                        <OptimizedImage
                            key={id}
                            src={image}
                            srcWebp={webp}
                            alt={alt}
                            className="workspace__img workspace__img--half"
                        />
                    ))}
                </div>

                <div className="workspace__grid">
                    {WORKSPACE_ITEMS.map(({ id, title, description, images, webp }) => (
                        <div key={id} className="workspace__card">
                            <OptimizedImage
                                src={images[0]}
                                srcWebp={webp[0]}
                                alt={title}
                                className="workspace__card-img"
                            />
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Workspace
