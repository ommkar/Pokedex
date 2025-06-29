async function fetchdata() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("NO POKEMON");
        }

        const data = await response.json();

        const PokemonImg = data.sprites.front_default;
        const imgElement = document.getElementById("PokemonImg");
        imgElement.src = PokemonImg;
        imgElement.style.display = "block";

        const PokeName = data.name;
        const nameElement = document.getElementById("PokeName");
        nameElement.innerText = `Name: ${PokeName}`;
        nameElement.style.display = "block";

        const PokeType = data.types.map(typeInfo => typeInfo.type.name).join(", ");
        const typeElement = document.getElementById("PokeType");
        typeElement.innerText = `Type: ${PokeType}`;
        typeElement.style.display = "block";

        const PokeHeight = data.height;
        const heightElement = document.getElementById("PokeHeight");
        heightElement.innerText = `Height: ${PokeHeight} dm`;
        heightElement.style.display = "block";

        const PokeWeight = data.weight;
        const weightElement = document.getElementById("PokeWeight");
        weightElement.innerText = `Weight: ${PokeWeight} kg `;
        weightElement.style.display = "block";

        const PokeAbilities = data.abilities.map(ability => ability.ability.name).join(", ");
        const AbilitiesElement = document.getElementById("PokeAbilities");
        AbilitiesElement.innerText = `Abilities: ${PokeAbilities}`;
        AbilitiesElement.style.display = "block";

        const PokeMoves = data.moves.slice(0, 5).map((move, index) => `(${index + 1}) ${move.move.name}`).join(", ");
        const MovesElement = document.getElementById("PokeMoves");
        MovesElement.innerText = `Moves: ${PokeMoves}`;
        MovesElement.style.display = "block";

    } catch (error) {
        console.error(error);
        alert("Pokemon not found. Please try again.");
    }
}