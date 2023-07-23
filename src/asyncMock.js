

const ganados = [
    {
        raza: "Hereford", precio: 135000, id: "1", img: "../img/vaca-hereford.jpeg", razaCategoria: "vacunos", stock: 3,
        descripcion: "Vaca re piola"
    },
    {
        raza: "Holstein", precio: 110000, id: "2", img: "../img/vaca-holstein.jpeg", razaCategoria: "vacunos", stock: 4,
        descripcion: "Vaca re piola"
    },
    {
        raza: "Dorper", precio: 55000, id: "3", img: "../img/oveja-dorper.jpg", razaCategoria: "ovinos", stock: 9,
        descripcion: "Vaca re piola"
    },
    {
        raza: "Merina", precio: 58000, id: "4", img: "../img/oveja-merina.jpg", razaCategoria: "ovinos", stock: 10,
        descripcion: "Vaca re piola"
    },
    {
        raza: "Berkshire", precio: 22000, id: "5", img: "../img/cerdo-berkshire.jpg", razaCategoria: "porcinos", stock: 2,
        descripcion: "Vaca re piola"
    },
    {
        raza: "Yorkshire", precio: 27000, id: "6", img: "../img/cerdo-yorkshire.jpg", razaCategoria: "porcinos", stock: 2,
        descripcion: "Vaca re piola"
    }
]


export const getGanados = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ganados)
        }, 500)
    })
}

export const getGanadoCategoria = (categoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const ganadoCategoria = ganados.filter(prod => prod.razaCategoria === categoria)
            resolve(ganadoCategoria);
        }, 500)
    })
}

export const getUnGanado = (id) => {
    return new Promise(resolve => {

        setTimeout(
            () => {
                const ganado = ganados.find(gan => gan.id === id)
                resolve(ganado)
            }, 500)
    }

    )
}