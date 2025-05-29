import { OpportunityDetailProps } from "@/types/vy-type"
import { FC } from 'react'

const OpportunityDetail: FC<OpportunityDetailProps> = ({ data }) => {
    return (
        <div>
            {/* Access data properties here */}
            {data && Object.keys(data).length > 0 ? (
                <div>
                    {/* Display data properties */}
                    {data.title && <h2>{data.title}</h2>}
                    {/* Add more elements to display other properties */}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    )
}

export default OpportunityDetail
