const profiles = [
    {
        id:1,
        name: 'Jose',
        image: 'https://i.imgur.com/MK3eW3As.jpg',
        esMayor:true
    },
    {
        id:2,
        name: 'Ana',
        image: 'https://i.imgur.com/7vQD0fPs.jpg',
        esMayor:false

    },
    {
        id:3,
        name: 'Juan',
        image: 'https://i.imgur.com/yXOvdOSs.jpg',
        esMayor:true
    },
]

function Profile({data}) {

    
    return (
      <img
        src={data.image}
        alt={data.name}
        className="avatar"
      />
    );
  }
  
  export default function Gallery() {

    const personasMayores = profiles.filter(function(item){
        return item.esMayor
    })
    console.log(personasMayores)

    var personasDesdeFor = []
    for (let i=0; i< profiles.length; i++) {
        personasDesdeFor.push(<Profile data={profiles[i]} />)
    }

    return <section>
        <h1>Amazing scientists</h1>
        
            <h2>Personas renderizado con iteracion map</h2>
            {profiles.map((item) => <Profile data={item}></Profile>)}
            
            <br/>
            
            {/* renderizando array creado desde iteracion con for */}
            <h2>Personas renderizado con iteracion for</h2>
            {personasDesdeFor}

            <br/>
            <h2>Mayores de edad (aplicamos filter)</h2>
            {personasMayores.map((mayor) => <Profile data={mayor} />)}
      </section>
  }