function Host({ netaddress, acceptingcontracts, connectabilitystatus, workingstatus, totalstorage, remainingstorage, }) {
    return <>
        <div>Net Address: {netaddress}</div>
        <div>Neue Verträge eröffnen: {acceptingcontracts}</div>
        <div>Verbindungsstatus: {connectabilitystatus}</div>
        <div>Status: {workingstatus}</div>
        <div>Gesamtspeicher: {totalstorage}</div>
        <div>Freier Speicher: {remainingstorage}</div>
    </>
}

Host.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4280/host', {
        headers: {
            'User-Agent': 'ScPrime-Agent',
            'Authentication': 'Basic ' + ':015ebec5fa1a997957fc1e43f8cbdfe0'.toString('base64')
        }
    })
    console.log(res)
    const json = await res.json()
    const extSettings = json.externalsettings
    return {
        netaddress: extSettings.netaddress,
        acceptingcontracts: extSettings.acceptingcontracts,
        netaddress: extSettings.netaddress,
        connectabilitystatus: json.connectabilitystatus,
        workingstatus: json.workingstatus,
        totalstorage: extSettings.totalstorage,
        remainingstorage: extSettings.remainingstorage
    }
}

export default Host