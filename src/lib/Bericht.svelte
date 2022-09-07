<script>
    import { fly } from 'svelte/transition';
    export let item;
    let uitgeklapt=false;
</script>

<div class='nieuwsbericht' on:click={()=>{uitgeklapt=!uitgeklapt; console.log(uitgeklapt)}}>
    <h5 class="bold">{item.title}</h5>
    <p class="datum regular">
        {item.publishedAt.substr(0, 10)}
    </p>

    {#if uitgeklapt}
    <p transition:fly="{{ y: 500, duration: 1000 }}">
        {item.content}
    </p>
    {/if}
</div>

<style>

.nieuwsbericht{
        width:30%;
        background-color: white;
        margin:1%;
        padding:2%;
    }

</style>