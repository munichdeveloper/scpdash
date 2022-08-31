function Host({ netaddress }) {
    return <div>Net Address: {netaddress}</div>
}

Host.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4280/host')
    console.log(res)
    const json = await res.json()
    return { netaddress: json }
}

export default Host