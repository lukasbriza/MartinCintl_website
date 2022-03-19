//COMPONENTS//
import { Pin, Call, Mail, Facebook, Instagram } from '../SVGs'

function IconSegment(props: iconSegment) {

    if (props.link) {
        let iconSVG
        switch (props.icon) {
            case 'Mail':
                iconSVG = <Mail style={{ fill: 'white' }} id={props.icon} className={"icon1"} />
                break
            case 'Facebook':
                iconSVG = <Facebook style={{ fill: 'white' }} id={props.icon} className={"icon1"} />
                break
            case 'Instagram':
                iconSVG = <Instagram style={{ fill: 'white' }} id={props.icon} className={"icon1"} />
                break
        }
        return (
            <div className="iconSegment">
                <a className="iconWrapper" href={props.link}>
                    {iconSVG}
                    <div className="description">
                        {props.description}
                    </div>
                </a>
            </div>
        )
    } else {
        let iconSVG
        switch (props.icon) {
            case 'Pin':
                iconSVG = <Pin style={{ fill: 'white' }} id={props.icon} className={"icon1"} />
                break
            case 'Call':
                iconSVG = <Call style={{ fill: 'white' }} id={props.icon} className={"icon1"} />
                break
        }
        return (
            <div className="iconSegment">
                <div className="iconWrapper">
                    {iconSVG}
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>
        )
    }
}

export { IconSegment }