import CustomSelect from '../../../../(commonLogicComponents)/CustomSelect'
import RoundCard from '../../roundsUI/RoundCard'

export default function ColumnComponent({ index, trustedData }) {
    return (
        <>
        {
            index === 0 && <CustomSelect />
        }
            <RoundCard {...trustedData} />
        </>
    )
}