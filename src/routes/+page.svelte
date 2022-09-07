<script>
    import { onMount } from "svelte/internal";
    import scriptJS from "$lib/script";

    onMount(async () => {
        new scriptJS();
    });

    export let data;
    if (data.info.status=='error') console.log('error bij fetchen:' ,data);
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap");
    </style>
</svelte:head>

<main id="home" class="pagina">
    <nav>
        <div class="small">
            <a href="#home"
                ><img
                    class="logo"
                    src="images/outhands-logo-zwart.svg"
                    alt=""
                /></a
            >
            <div class="hamburger" id="hamburger">
                <div id="lijnT" class="lijn" />
                <div id="lijnM" class="lijn" />
                <div id="lijnB" class="lijn" />
            </div>
        </div>

        <div class="wide">
            <a href="#home"
                ><img
                    class="logo"
                    src="images/outhands-logo-zwart (12)-1.svg"
                    alt=""
                /></a
            >
            <ul>
                <li><a href="#overons">Over ons</a></li>
                <li><a href="#diensten">Diensten</a></li>
                <li><a href="#themas">Themas</a></li>
                <li><a href="#nieuws">Nieuws</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="login">
                <button>Login</button>
            </div>
        </div>
    </nav>

    <div class="partner">
        <div class="container">
            <h3>Outhands Internet & Media</h3>
            <h1 class="bold">Dé partner in web- sites en applicaties</h1>
            <h3 class="h3">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                <span class="bold">laboris nisi ut aliquip</span> ex ea commodo.
            </h3>

            <button class="knopOverons">over ons</button>
        </div>
        <div class="foto">
            <img class="lee" src="images/lee.png" alt="" />
        </div>
    </div>
</main>

<div class="popmenu verborgen" id="popup">
    <ul>
        <li><a href="#overons">Over ons</a></li>
        <li><a href="#diensten">Diensten</a></li>
        <li><a href="#themas">Themas</a></li>
        <li><a href="#nieuws">Nieuws</a></li>
        <li><a href="#contact">Contact</a></li>
        <li class="login"><button>Login</button></li>
    </ul>
</div>

<article id="diensten" class="pagina opsomming">
    <div class="card flex2">
        <h2 class="bold">Sed ut perspiciatis unde omnis iste.</h2>
        <p class="zwart">
            Lorem ipsum dolor sit amet consectetur <span class="bold"
                >adipisicing</span
            >
            elit. Obcaecati quae
            <spam class="bold">earum corporis </spam>accusantium amet, atque,
            perspiciatis itaque hic.
        </p>
        <h5 class="ctatext">
            Bekijk al onze diensten
            <img src="images/Icon awesome-long-arrow-alt-right-1.svg" alt="" />
        </h5>
    </div>

    <div class="card">
        <div class="iconGradient">
            <img src="images/001-piggy-bank.svg" alt="" />
        </div>
        <div>
            <h4>Concept & Strategie</h4>
            <div class="lijnOranje" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                ipsum vitae? Debitis dolorem dicta voluptatem consequatur cum
                animi.
            </p>
        </div>
    </div>

    <div class="card">
        <div class="iconGradient">
            <img src="images/002-check.svg" alt="" />
        </div>
        <div>
            <h4>Ontwerp & Vormgeving</h4>
            <div class="lijnOranje" />
            <p class="text-grijs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                ipsum vitae? Debitis dolorem dicta voluptatem consequatur cum
                animi.
            </p>
        </div>
    </div>
</article>

<article class="pagina opsomming">
    <div class="card">
        <div class="iconGradient">
            <img src="images/scale.svg" alt="" />
        </div>
        <div>
            <h4 class="card-title">Website ontwikkeling</h4>
            <div class="lijnOranje" />
            <p class="card-text text-grijs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                ipsum vitae? Debitis dolorem dicta voluptatem consequatur cum
                animi.
            </p>
        </div>
    </div>

    <div class="card">
        <div class="iconGradient">
            <img src="images/search.svg" alt="" />
        </div>
        <div>
            <h4 class="card-title">E-commerce</h4>
            <div class="lijnOranje" />
            <p class="card-text text-grijs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                ipsum vitae? Debitis dolorem dicta voluptatem consequatur cum
                animi.
            </p>
        </div>
    </div>

    <div class="card">
        <div class="iconGradient">
            <img src="images/004-check-1.svg" alt="" />
        </div>
        <div>
            <h4 class="card-title">Web applicaties</h4>
            <div class="lijnOranje" />
            <p class="card-text text-grijs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                ipsum vitae? Debitis dolorem dicta voluptatem consequatur cum
                animi.
            </p>
        </div>
    </div>

    <div class="card">
        <div class="iconGradient">
            <img src="images/003-presentation.svg" alt="" />
        </div>
        <div class="card-body">
            <h4 class="card-title">Internet Marketing</h4>
            <div class="lijnOranje" />
            <p class="card-text text-grijs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                ipsum vitae? Debitis dolorem dicta voluptatem consequatur cum
                animi.
            </p>
        </div>
    </div>
</article>

<aside id="nieuws" class="pagina nieuwsVoordelen">
    <div class="nieuwsveld">
        <h2 class="bold">Het laatste nieuws</h2>
        <ul>
            {#await data then data}
            {#if data.info.status!='error'}
                <li>
                    {#each data.info as item}
                        <h5 class="bold">{item.title}</h5>
                        <p class="datum regular">
                            {item.publishedAt.substr(0, 10)}
                        </p>
                    {/each}
                </li>
            {/if}
            {/await}
        </ul>
        <a class="nieuwslink" href='/nieuws'><h5 class="ctatext">
            Bekijk al onze nieuwsberichten
            <img src="images/Icon awesome-long-arrow-alt-right-1.svg" alt="" />    
        </h5>
    </a>
    </div>

    <div class="voordelenTB">
        <div class="voordelen">
            <h2>De Voordelen van Outhands</h2>
            <ul>
                <li>
                    <div class="tick" />
                    Lorem ipsum dolor sit amet
                </li>
                <li>
                    <div class="tick" />
                    Lorem ipsum dolor sit amet.
                </li>
                <li>
                    <div class="tick" />
                    Lorem ipsum dolor sit amet.
                </li>
                <li>
                    <div class="tick" />
                    Lorem ipsum dolor sit amet.
                </li>
            </ul>
        </div>

        <div class="gradientTerugbellen">
            <h2>Teruggebeld worden?</h2>
            <p>
                Wij geven de voorkeur aan een persoonlijk gesprek. Laat je
                telefoonnummer achter.
            </p>
            <div class="belOnsTerug">
                <input
                    type="tel"
                    class="telNummerKnop"
                    placeholder="Telefoonnummer"
                />
                <button>Bel mij terug</button>
            </div>
        </div>
    </div>
</aside>

<section id="themas" class="pagina kennis">
    <div class="usp">
        <h2 class="bold">Kennis van ons vak en dat van u</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
        </p>
        <h5 class="ctatext">
            Meer over ons
            <img src="images/Icon awesome-long-arrow-alt-right-1.svg" alt="" />
        </h5>
    </div>

    <div class="caroussel">
        <div class="fotos">
            <div class="fotoKaart">
                <picture>
                    <img src="images/caroussel/megan.png" alt="" />
                </picture>
                <div class="fotoText">Megan met hoed</div>
            </div>

            <div class="fotoKaart">
                <picture>
                    <img src="images/caroussel/rafaella.png" alt="" />
                </picture>
                <div class="fotoText">Zwoel kijkende rafaella</div>
            </div>

            <div class="fotoKaart">
                <picture>
                    <img src="images/caroussel/ibrahima.png" alt="" />
                </picture>
                <div class="fotoText">Ibrihama met rode bril</div>
            </div>
            <div class="fotoKaart">
                <picture>
                    <img src="images/caroussel/priscilia.jpg" alt="" />
                </picture>
                <div class="fotoText">Priscilia eet ijs.</div>
            </div>

            <div class="fotoKaart">
                <picture>
                    <img src="images/caroussel/stefan.png" alt="" />
                </picture>
                <div class="fotoText">Stefan die eigenlijk Stefanie heet</div>
            </div>

            <div class="fotoKaart">
                <picture>
                    <img src="images/caroussel/megan.png" alt="" />
                </picture>
                <div class="fotoText">Megan met hoed</div>
            </div>

            <div class="fotoKaart">
                <picture>
                    <img src="images/caroussel/rafaella.png" alt="" />
                </picture>
                <div class="fotoText">Zwoel kijkende rafaella</div>
            </div>
        </div>
        <div class="knoppenLijst" />
    </div>
</section>

<article id="overons" class="pagina overMetHand">
    <img src="images/Hand.svg" alt="" />
    <div>
        <h2 class="bold">
            Dit is Outhands Internet & Media Full Service Digital Agency
        </h2>
        <p>
            Binnen ons gevarieerde team brengt ieder persoon zijn eigen mening
            en specialisatie mee. Samen vormt dit de basis om een goed en uniek
            product neer te zetten. De een ontwerpt een huisstijl die perfect
            aansluit bij jouw bedrijf, terwijl de ander zorgt dat de website
            pixel-perfect in elkaar zit.
        </p>
        <p>
            Werken bij Outhands betekent werken in een creatieve en informele
            organisatie. De combinatie van creativiteit, professionaliteit en
            een prettige sfeer maakt werken bij en met Outhands een ervaring op
            zich. Met een gedreven team specialisten werken we met passie aan
            jouw product. Het product staat centraal, of het nu gaat om een
            website op maat of het drukwerk van jouw bedrijf. Ook na 13 jaar
            blijven we ontwikkelen en staat flexibiliteit bij ons voorop.
        </p>
    </div>
</article>

<section class="pagina kernwaarden">
    <div class="tekst">
        <h2>Onze kernwaarde</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
        </p>
        <p class="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate veli.
        </p>
        <button>Kom werken bij Outhands</button>
    </div>
    <div class="gezicht">
        <img src="images/Background.png" alt="" />
    </div>
</section>

<footer>
    <div id="contact" class="footer">
        <div class="pagina contactInfo">
            <div class="logo">
                <a href="#home">
                    <img src="images/outhands-logo-zwart (12)-1.svg" alt="" />
                </a>
            </div>
            <div class="naw">
                <p class="bold">Outhands Internet & Media</p>
                <p>Rijnsburgerweg 88C</p>
                <p>2231 AG Rijnsburg</p>
                <p>Zuid-Holland</p>
            </div>
            <div class="tel">
                <p>Tel. 071 78 53 215</p>
                <p>Mail. squad@outhands.nl</p>
            </div>
            <div class="opening">
                <p class="bold">Werktijden</p>
                <p>Ma - Vr: 09:00 - 17:00</p>
                <p>Weekend gesloten</p>
            </div>
        </div>
        <div class="pagina copyright">
            <p class="payoff">
                Copyright 2022 &middot; Alle rechten voorbehouden &middot;
                Algemene voorwaarden &middot; Privacyverklaring
            </p>
            <p class="klopper">
                Ontwikkeling door&nbsp;
                <span class="bold">P.Felis</span>
            </p>
        </div>
    </div>
</footer>
