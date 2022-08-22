import './category.css'
import BackArrow from "../../../../../assets/back_arrow"
import { CategoryType } from '../../../../../interfaces/category'

interface Props {
    categories: CategoryType
    setCategoryClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Category({ categories, setCategoryClicked }: Props) {
    return (
        <>
            <div className='filter_box scroll'> 
                <BackArrow setFilterClicked={ setCategoryClicked }/>
                { categories.map((category, index) => <><div key={index + 1} className="categories">{category}</div></>) }
            </div>
        </>
    )
}