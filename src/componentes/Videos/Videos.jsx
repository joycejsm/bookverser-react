import './Videos.css'
const Videos = () => {
    return (

        <>
            <section id="videos">
                <h2>Vídeos</h2>
                
                <div id="#iframe-container">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4-veptcn3iU?si=D02EcRyIRvc81MHb" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
            </section>
        </>
    )
}

export default Videos;

