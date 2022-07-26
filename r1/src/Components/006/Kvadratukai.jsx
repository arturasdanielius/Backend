function Kvadratukai ({keitimas}) {

    const [apskritimas, setBg] = useState('0px');

    const changeF = () => {
       
        setBg(a => a === '0px' ? '0px' : '50px');
        //endins + 3 (uzbaigs)
    }

    return (

    <button onClick={changeF} style={{
        width: '100px',
        height: '100px',
        borderRadius: '50px',
        color: 'yellow'
    }
    }>Mygtukas</button>
    )
};

export default Kvadratukai