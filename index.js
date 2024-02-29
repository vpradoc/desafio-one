    
    /*
    "e" = "enter"
    "i" "imes"
    "a" "ai"
    "o" "ober"
    "u" "ufat" */
    
    var encrypted = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    };

    var decode = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };

    function decodeThis() {    
        
        str = document.getElementById("caixa-entrada").value

        var regex = new RegExp(Object.keys(encrypted).join('|'), 'g');
        
        var novaString = str.replace(regex, function(matched) {
            return encrypted[matched];
        });
    
        return document.getElementById("resposta").value = novaString
    }

    function codeThis() {    

        str = document.getElementById("caixa-entrada").value
        
        var regex = new RegExp(Object.keys(decode).join('|'), 'g');
        
        var novaString = str.replace(regex, function(matched) {
            return decode[matched];
        });
    
        return document.getElementById("resposta").value = novaString
        
    }

    function copiarTexto() {
        let textoCopiado = document.getElementById("resposta");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("O código foi copiado com sucesso !");
    }
