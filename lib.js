class Block {
    constructor(head) {
        this.head = head;
        this.items = [];
    }

    push(category, title, desc, addr) {
        this.items.push(
            {
                "category": category,
                "title": title,
                "desc": desc,
                "addr": addr,
            }
        );
        return this;
    }

    site(title, desc, addr) {
        return this.push("Site", title, desc, addr);
    }

    blog(title, desc, addr) {
        return this.push("Blog", title, desc, addr);
    }

    book(title, desc, addr) {
        return this.push("Book", title, desc, addr);
    }

    collection(title, desc, addr) {
        return this.push("Collection", title, desc, addr);
    }

    article(title, desc, addr) {
        return this.push("Article", title, desc, addr);
    }

    repo(title, desc, addr) {
        return this.push("Repo", title, desc, addr);
    }

    END() {
        var header = `<h2>${this.head}</h2>\n`;
        var body = "";
        var division = "<hr>\n";


        for(var i in this.items) {
            var entry = 
`<li> ${this.items[i]["category"]}:
    <a href="${this.items[i]["addr"]}", target="_blank">
        ${this.items[i]["title"]}
    </a> ${this.items[i]["desc"]}
</li>
`
            body += entry;
        }
        document.write("<div>" + header + "<ul>" + body + "</ul>" + division + "</div>");   
    }
}

function DIV(head){
    return new Block(head);
}