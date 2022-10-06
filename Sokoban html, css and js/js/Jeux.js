//on définit la classe Jeux
class Jeux {
    //on définit le constructeur 
    constructor(ctx, info, canvas, messageP) {
        //notre canvas
        this.canvas = canvas;
        //ctx : le contexte de notre canvas
        this.ctx = ctx;
        //graph : tableau contenant des chiffres en guise de graphique 
        this.graph = [...info.graph];
        //buts : tableaux contenant les index des positions où les block doivents êtres déposés
        this.buts = [...info.buts];
        //taille: tailles longueur et largeur de chaque case de notre graph
        this.taille = Math.floor(this.canvas.width / this.graph.length);
        //position initiale du joueur dans le tableau graph
        this.x = [...info.joueurPos][0]
        this.y = [...info.joueurPos][1]
        //variable qui desactive la classe
        this.oun = "o"
        //message de fin
        this.messageP = messageP
    }

    /*
    dessine : fonction qui vas dessiner dans le canvas des carrés de couleur en fonction 
    du chiffre dans le tableau graph;
    */
    dessine() {
        for (let a of this.buts) {
            if (this.graph[a[0]][a[1]] == 0)
                this.graph[a[0]][a[1]] = 7
            else if (this.graph[a[0]][a[1]] == 8)
                this.graph[a[0]][a[1]] = 6
        }
        //on parcours tout les valeurs du graph
        for (let a = 0; a < this.graph.length; a++) {
            for (let b = 0; b < this.graph.length; b++) {
                this.rectangle(b, a, this.taille, "black")
                if (this.graph[a][b] === 9) {
                    this.cercle(b, a, this.taille / 2 - 5, "blue")
                } else if (this.graph[a][b] === 8) {
                    this.rectangle(b, a, this.taille, "brown")
                } else if (this.graph[a][b] === 1) {
                    this.rectangle(b, a, this.taille, "white")
                    this.rectangle(b, a, this.taille - 6, "red")
                } else if (this.graph[a][b] === 7) {
                    this.cercle(b, a, this.taille / 2 - 10, "yellow")
                } else if (this.graph[a][b] === 6) {
                    this.rectangle(b, a, this.taille, "green")
                }
            }
        }
    }

    //fonction qui dessine une cercle d'une taille, couleur, et position données en paramètre
    cercle(x, y, r, couleur) {
        this.ctx.beginPath();
        this.ctx.fillStyle = couleur;
        this.ctx.arc(x * this.taille + (this.taille / 2 - 5 + 5), y * this.taille + (this.taille / 2 - 5 + 5), r, 0, Math.PI * 2);
        this.ctx.fill();
    }

    //fonction qui dessine un reactangle d'une taille, couleur, et positions données en paramètre
    rectangle(x, y, taille, couleur) {
        this.ctx.fillStyle = couleur;
        this.ctx.fillRect(x * this.taille, y * this.taille, taille, taille);
    }

    //fonction permettant de faire déplacer le joueur vers le haut ou le bas
    deplaceHautBas(dir, caisse) {
        if (caisse == "o" && dir == "h")
            this.graph[this.y - 2][this.x] = 8;
        else if (caisse == "o" && dir == "b")
            this.graph[this.y + 2][this.x] = 8;
        this.graph[this.y][this.x] = 0;
        dir == "h" ? this.y-- : this.y++
        this.graph[this.y][this.x] = 9;
    }

    //fonction permettant de faire déplacer le joueur vers le haut ou le bas
    deplaceGaucheDroite(dir, caisse) {
        if (caisse == "o" && dir == "g")
            this.graph[this.y][this.x - 2] = 8;
        else if (caisse == "o" && dir == "d")
            this.graph[this.y][this.x + 2] = 8;
        this.graph[this.y][this.x] = 0;
        dir == "g" ? this.x-- : this.x++
        this.graph[this.y][this.x] = 9;
    }

    //efface tout ce qu'il y a sur le tableau 
    efface() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigth)
    }

    //gestion des mouvements du joueurs par rapport au touche du clavier
    mouvement() {
        this.efface()
        document.addEventListener("keydown", (e) => {
            if (this.oun == "n")
                return;
            else {
                if (e.key == "ArrowUp" && this.graph[this.y - 1][this.x] != 1) {
                    if (this.si2(this.graph[this.y - 1][this.x], "=") && this.si(this.graph[this.y - 2][this.x]))
                        this.deplaceHautBas("h", "o")
                    else if (this.si2(this.graph[this.y - 1][this.x], "!"))
                        this.deplaceHautBas("h", "n")
                }
                else if (e.key == "ArrowDown" && this.graph[this.y + 1][this.x] != 1) {
                    if (this.si2(this.graph[this.y + 1][this.x], "=") && this.si(this.graph[this.y + 2][this.x]))
                        this.deplaceHautBas("b", "o")
                    else if (this.si2(this.graph[this.y + 1][this.x], "!"))
                        this.deplaceHautBas("b", "n")
                }
                else if (e.key == "ArrowLeft" && this.graph[this.y][this.x - 1] != 1) {
                    if (this.si2(this.graph[this.y][this.x - 1], "=") && this.si(this.graph[this.y][this.x - 2]))
                        this.deplaceGaucheDroite("g", "o")
                    else if (this.si2(this.graph[this.y][this.x - 1], "!"))
                        this.deplaceGaucheDroite("g", "n")
                }
                else if (e.key == "ArrowRight" && this.graph[this.y][this.x + 1] != 1) {
                    if (this.si2(this.graph[this.y][this.x + 1], "=") && this.si(this.graph[this.y][this.x + 2]))
                        this.deplaceGaucheDroite("d", "o")
                    else if (this.si2(this.graph[this.y][this.x + 1], "!"))
                        this.deplaceGaucheDroite("d", "n")
                }
                this.dessine()
                this.messageFin()
            }
        })
    }

    //fonction permettant de savoire si la partie est-elle terminer
    //verifie si tout les cases de but contiennent tous le chiffre 9
    terminer() {
        for (let a of this.buts)
            if (this.graph[a[0]][a[1]] != 6)
                return false
        return true
    }

    //fonction qui affiche un message lorsque le jeux est fini
    messageFin() {
        if (this.terminer()) {
            this.oun = "n";
            this.messageP.innerHTML = "Bravo, vous avez ganger"
        }
    }

    //fonction principale
    main() {
        this.dessine()
        this.mouvement()
    }

    //fonction qui met fin à la classe
    fin() {
        this.oun = "n"
    }

    //compare des valeurs
    si(x, m) {
        return x != 1 && x != 8 && x != 6
    }
    //compare des valeurs
    si2(x, marque) {
        if (marque == "!")
            return x != 8 && x != 6
        return x == 8 || x == 6
    }
}
