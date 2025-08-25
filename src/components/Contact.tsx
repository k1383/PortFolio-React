import '../style/Contact.scss'

const Contact = () => {
    return <section id="Contact">
        <h2>Contactez-moi</h2>
            <p>Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter, je  <br />vous répondrai dans les plus brefs délais.</p>
            <form className="container" action="#" method="post" id="myForm">
                    
                  <article>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="name" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" required/>
                    </div>
                </article>
                <div id="div4">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required />
                </div>
                <div id="div5">
                    <input type="checkbox" id="checkbox" required />
                    <label htmlFor="checkbox">J'accepte que mes données soient traitées conformément à la politique deconfidentialité. Elles ne seront utilisées que pour répondre à ma demande.</label>
                </div>
                
                <button type="submit" id="submit">Envoyer le message</button>

            </form>
    </section>
};

export default Contact;