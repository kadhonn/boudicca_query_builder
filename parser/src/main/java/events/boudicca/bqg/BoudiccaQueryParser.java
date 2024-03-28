package events.boudicca.bqg;

import base.boudicca.query.BoudiccaQueryRunner;
import base.boudicca.query.Expression;
import de.inetsoftware.jwebassembly.api.annotation.Export;

public class BoudiccaQueryParser {
    @Export
    public static Expression parseQuery(String query) {
        return BoudiccaQueryRunner.INSTANCE.parseQuery(query);
    }
}
