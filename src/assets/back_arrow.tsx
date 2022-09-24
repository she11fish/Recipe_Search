interface Props {
    setFilterClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BackArrow({ setFilterClicked }: Props) {
    return (
        <svg onClick={() => setFilterClicked(false)} className="back-arrow" width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.25 13H28.25M12.5 24.25L1.25 13L12.5 24.25ZM1.25 13L12.5 1.75L1.25 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}
