
interface Props {
    event_handler: () => void
    right: JSX.Element
}

export default function AreaMenu ({ event_handler, right }: Props) {
    return ( 
        <>
            <button className="filter lg-box clear-margin" onClick={event_handler}>Area     
                { right }
            </button>
        </>
    )
}