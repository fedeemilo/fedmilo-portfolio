import OptimizedImage from '../../common/optimized-image/OptimizedImage'
import { ICONS } from '../../constants/icons'
import './workspace.css'

const Workspace = () => {
    return (
        <section id="workspace">
            <h2>My Workspace</h2>
            <p className="workspace__description">
                This is where I build ideas into digital experiences. I work with a custom
                mechanical keyboard, a 49" ultrawide monitor, and a MacBook Pro M1. My tools include
                VS Code, Obsidian, Figma, and GitHub Copilot.
            </p>
            <div className="workspace__image-wrapper">
                <OptimizedImage
                    src={ICONS.ME_DESK}
                    srcWebp={ICONS.ME_DESK_WEBP}
                    alt="My workspace"
                    className="workspace__img"
                />
            </div>
        </section>
    )
}

export default Workspace
