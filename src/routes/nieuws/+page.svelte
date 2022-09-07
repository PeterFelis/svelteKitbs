<script>
    import Bericht from "$lib/Bericht.svelte";
    import { goto } from '$app/navigation';
  

    export let data;
</script>

<aside id="nieuws" class="pagina nieuwsVoordelen ">
    <div class="nieuwsveld breed">
        <h2 class="bold">Het laatste nieuws</h2>
            <div class='nieuwsoverzicht'>
            {#await data then data}
            {#if data.info.status!='error'}              
                    {#each data.info as item}
                        <Bericht {item}/>
                    {/each}
                
            {/if}
            {/await}
            </div>
            <div on:click={()=>goto("/#nieuws")}>
            <h5 class="ctatext">
            <img class='omdraaien' src="images/Icon awesome-long-arrow-alt-right-1.svg" alt="" />
            terug
            </h5>
        </div>
    </div>
</aside>

<style>
    .breed{
        min-width: 80vw;      
    }
    .nieuwsoverzicht{
        width:100%;
        display: flex;
        flex-wrap: wrap;
    }
    

    .omdraaien{
        transform: scale(-1, 1);

    }
</style>