$(document).ready(function () {
    $("#action").on("click", function () {
        console.log("Azione di click eseguita");

        var iframe = document.getElementById('my-iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument && iframeDocument.readyState === 'complete') {
            console.log("Iframe caricato");

            // Seleziona gli elementi giusti all'interno dell'iframe
            var animatedReceipt = iframeDocument.querySelector('#receipt');
            var receiptWrap = iframeDocument.querySelector('#receipt-wrap');

            if (animatedReceipt && receiptWrap) {
                // Alterna le classi 'open' e 'show'
                animatedReceipt.classList.toggle('open');  // Cambia la posizione della ricevuta
                receiptWrap.classList.toggle('show');      // Cambia l'opacità della ricevuta

                // Log per debug
                if (animatedReceipt.classList.contains('open')) {
                    console.log("La ricevuta scende");
                } else {
                    console.log("La ricevuta risale");
                }
            } else {
                console.log("Elementi non trovati all'interno dell'iframe.");
            }
        } else {
            console.log("L'iframe non è ancora caricato o non disponibile.");
        }
    });
});
