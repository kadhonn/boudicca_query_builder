package events.boudicca.bqg;

import org.teavm.jso.dom.html.HTMLDocument;

public class BoudiccaQueryParser {
    public static void main(String[] args) {
        HTMLDocument.current().getElementById("parse_query_button").addEventListener("click", event -> {
            System.out.println("frigging hell");
        });
    }
}
