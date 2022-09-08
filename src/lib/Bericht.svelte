<script>
    import { fade } from "svelte/transition";
    export let item;
    let uitgeklapt = false;
</script>

<div
    class="nieuwsbericht"
    on:click={() => {
        uitgeklapt = !uitgeklapt;
        console.log(uitgeklapt);
    }}
>
    <h3 class="bold">{item.title}</h3>
    <p class="datum regular">
        Datum: {item.publishedAt.substr(0, 10)}
    </p>

    {#if uitgeklapt}
        <div transition:fade={{ duration: 1000 }}>
            <div>
                <div class="filler" />
                {#if item.content != null}
                    {item.content}
                {:else}
                    Geen content meegezonden
                {/if}
            </div>
            <div class="filler" />
            <a class="link" href={item.url} target="_blank"
                >open bericht in nieuw venster</a
            >
        </div>
    {/if}
</div>

<style>
    .nieuwsbericht {
        width: 100%;
        background-color: white;
        margin: 1%;
        padding: 2%;
    }

    h3 {
        color: #ff8000;
        margin-bottom: 1em;
    }

    .link {
        color: white;
        background-color: #ff8000;
        padding: 8px;
        border-radius: 8px;
    }

    .filler {
        height: 20px;
    }

    @media only screen and (min-width: 700px) {
        .nieuwsbericht {
            width: 46%;
        }
    }

    @media only screen and (min-width: 1000px) {
        .nieuwsbericht {
            width: 30%;
        }
    }
</style>
