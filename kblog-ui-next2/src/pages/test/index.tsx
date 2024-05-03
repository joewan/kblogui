import { Card } from 'antd'
import React, { Fragment } from 'react'

export default function Test(props) {
    
    return (
        <Fragment>
            <span className='mb-3 text-5xl font-semibold text-center'>
                <h1>Goerlis Faucet</h1>
            </span>

            <Card>
                <h1>Bitcoin</h1>
            </Card>
            <Card>
                <h1>Ethereum</h1>
            </Card>
            <Card>
                <h1>Solana</h1>
            </Card>
            <Card>
                <h1>TON</h1>
            </Card>
            <Card>
                <h1>BeraChain</h1>
            </Card>
        </Fragment>
    )
}
