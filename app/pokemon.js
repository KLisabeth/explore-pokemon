class Pokemon {

    constructor() {
        this.id = '';
        this.name = '';
        this.image = '';
        this.isShowingFront = true;
    }

    catchPokemon(pokemonId) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        return fetch(url)
            .then((data) => data.json())
            .then((data) => {
                this.id = data.id;
                this.name = data.name;
                return data;
            })
            .then((data) => {
                return fetch(data.forms[0].url);
            })
            .then((data) => data.json())
            .then((data) => {
                this.image = data.sprites.front_default;
            })
            .catch(() => {})
    }

    changeForm() {
        if (this.isShowingFront) {
            this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.id}.png`;
            this.isShowingFront = false;
        }
        else {
            this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.id}.png`;
            this.isShowingFront = true;
        }
    }

    render() {
        const container = document.createElement('div');

        container.id = this.id;

        const name = document.createElement('p');
        const image = document.createElement('img');
        image.style.width = '200px';
        image.style.height = '200px';
        

        name.innerHTML = this.name;
        name.style.color ='red'
        name.style.fontVariantCaps = 'small-caps';
        name.style.fontSize ='30px';
        image.setAttribute('src', this.image);
        image.addEventListener('click', () => {
            this.changeForm();
            image.setAttribute('src', this.image);
            
        })

        container.appendChild(name);
        container.appendChild(image);
        
        return container;
    }
    deletePokemon(e){
        deleteBtn = document.getElementById('delete');
        deleteBtn.addEventListener('click',()=> {
            render.container.innerHTML = '';
        })
      
    }
}

export { Pokemon };