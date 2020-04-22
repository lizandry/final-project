import * as React from 'react';

const TeamTable = (props) => {
    // console.log('props', props)
    // TODO take this out of hardcoding
    return(
        <div>
{/* this is nothing */}
            {/* {props.action(2).map(user => {
                <div>
                    {user}
                </div>    

            })} */}
            {props.action(2)}
        </div>
    )
}

export default TeamTable;