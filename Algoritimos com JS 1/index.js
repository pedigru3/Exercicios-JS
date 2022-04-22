maisBarato = 0;

for (atual = 0; atual < precosLivros.length; atual++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual
    }
}