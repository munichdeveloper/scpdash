function Host({ netaddress }) {
    return <div>Net Address: {netaddress}</div>
}

Host.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4280/host', {
        headers: {
            'User-Agent': 'ScPrime-Agent',
            'Authentication': 'Basic ' + Buffer.from(':015ebec5fa1a997957fc1e43f8cbdfe0', 'base64')
        }
    })
    console.log(res)
    const json = await res.json()
    return { netaddress: json }
}

export default Host