import React from 'react'
import rightBlockBack from "../../../../../public/assets/image/home/whyNesterovRightBlockBack.jpg"

const RightBlock = () => {
    return (
        <div className='why-right__block'>
            <img src={rightBlockBack} alt="right block background" />
            <div className="why-right__block-content">
                <h3>
                    Архитектура
                </h3>
                <p>
                    Таким образом рамки и место обучения кадров влечет за собой процесс внедрения
                    и модернизации позиций, занимаемых участниками.
                </p>
            </div>
        </div>
    )
}

export default RightBlock;