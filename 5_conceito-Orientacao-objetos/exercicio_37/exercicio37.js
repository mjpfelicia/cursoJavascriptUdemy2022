class carrinho {
    constructor(itens, quantidade, valorTotal) {
        this.itens = itens;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;

    }


    // add produto no carrinho ja existente
    addItem(item) {


        let contador = 0;


        // produtos no carrinho
        for (let itemCarrinho in this.itens) {

            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].quantidade += item.quantidade;
                contador = 1;
            }

        }

        if (contador == 0) {
            this.itens.push(item);
        }
        // novos produtos que não existe no carrinho
        this.quantidade += item.quantidade;
        this.valorTotal += item.preco * item.quantidade;
    }



    removerItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho];

                let index = this.itens.findIndex(
                    function (obj) {
                        return obj.id == item.id;
                    }
                );
               
                
                this.quantidade -= this.itens[itemCarrinho].quantidade;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;

                this.itens.splice(index, 1);

            }
        }
    }

}


let produto = new carrinho([

    {
        id: 01,
        nome: "camisa",
        quantidade: 1,
        preco: 20
    },

    {
        id: 02,
        nome: "calça",
        quantidade: 2,
        preco: 50
    }


], 3, 120);

console.log(produto)

// add produto existente  no carrinho
produto.addItem({ id: 1, nome: "camisa", quantidade: 1, preco: 20 });
console.log(produto);


// add novos produtos nos carrinho
produto.addItem({ id: 3, nome: "vestido", quantidade: 1, preco: 20 });
console.log(produto);



// remover produto do carrinh
produto.removerItem({ id: 1, nome: "camisa", quantidade: 1, preco: 20 });
console.log(produto);



