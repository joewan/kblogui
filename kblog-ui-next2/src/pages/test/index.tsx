import { Card } from 'antd'
import React, { Fragment } from 'react'

export default function Test(props) {
    
    return (
        <Fragment>
            <span className='mb-3 text-5xl font-semibold text-center'>
                <h1>Goerlis Faucet</h1>
            </span>

            <Card>
                <h1>Bitcoin </h1>
                <a>bitcoin.org</a>
                <img src="/web3/bitcoin.png" width="40px" height="40px"></img>
            </Card>
            <Card>
                <h1>Ethereum</h1>
                <a>ethereum.org</a>
                <img src="/web3/eth.png" width="40px" height="40px"></img>
            </Card>
            <Card>
                <h1>Solana</h1>
                <a>solana.com</a>
                <img src="/web3/solana.png" width="40px" height="40px"></img>
            </Card>
            <Card>
                <h1>TON</h1>
                <a>ton.org</a>
                <img src="/web3/ton.png" width="40px" height="40px"></img>
            </Card>
            <Card>
                <h1>BeraChain</h1>
                <a>berachain.com</a>
                <img src="/web3/bera.png" width="40px" height="40px"></img>

            </Card>
        </Fragment>
    )
}
