export const data = [
  {
    task: "Co je specifické pro relační databáze?",
    answerList: ["Ukládání dat do tabulek."],
  },
  {
    task: "Co je to relační klíč?",
    answerList: [
      "Vztah mezi záznamy různých tabulek implementovanými odpovídajícími hodnotami.",
    ],
  },
  {
    task: "Co je primární a cizí klíč?",
    answerList: [
      ["Primární klíč", "Je ve zdrojové tabulce", "Vložení dat je první"],
      ["Cizí klíč", "Je v cílové tabulce", "Vložení dat je druhé v pořadí"],
    ],
  },
  {
    task: "Které kardinality používá relační databáze?",
    answerList: [
      [
        "<UU5.Bricks.Strong>1:1</UU5.Bricks.Strong>",
        "Jedno auto musí řídit právě jeden řidič na služební cestě.",
      ],
      ["1:N", "Jedna matka může mít 0 - N dětí."],
      ["M:N", "Různí lidé jsou přihlášeni na různé hobby kurzy."],
    ],
  },
  {
    task: "Co nesouvisí s referenční integritou?",
    answerList: ["Dotaz na počet odeslaných objednávek."],
  },
  {
    task: "Co je NOT NULL?",
    answerList: ["Je nutné zadat povinnou hodnotu atributu."],
  },
  {
    task: "Proč se používá referenční integrita?",
    answerList: [
      "Pro zachování konzistence dat.",
      "Pro propojení hodnot PK a FK v tabulkách.",
    ],
  },
  {
    task: "Která pravidla omezení se vztahují na primární klíč?",
    answerList: ["UNIQUE", "NOT NULL"],
  },
  {
    task: "Které skutečnosti jsou charakteristické pro normalizaci?",
    answerList: ["Malá redundance dat.", "Vložení každého faktu pouze jednou."],
  },
  {
    task: "Je některá normální forma povinná při návrhu relační DB?",
    answer: false,
  },
  {
    task: "Propojte NF a jejich popisy",
    answerList: [
      [
        "1 NF",
        "Všechny atributy jsou v jedné tabulce  - informace o osobě, adrese i vzdělání.",
      ],
      [
        "3 NF",
        "Atributy, které nejsou klíčové, nemají v tabulce žádné závislosti - info o osobách a adresách jsou ve vlastních tabulkách.",
      ],
      ["5 NF", "Každá tabulka má pouze ID a jeden atribut s hodnotou."],
    ],
  },
  {
    task: "Co musí mít tabulka ve 3 NF?",
    answerList: [
      "Atributy, které nejsou klíčové, nemají v tabulce žádné závislosti - info o osobách a adresách jsou ve vlastních tabulkách.",
      "Redundantní hodnoty jsou v číselnících (například názvy měst v adrese).",
    ],
  },
  {
    task: "Která NF se vyznačuje rozdělením tabulky do více tabulek přidáním jakéhokoli nového atributu? Tabulky v této NF mají typicky dva sloupce: ID a hodnota.",
    answerList: ["5 NF"],
  },
  {
    task: "K čemu slouží denormalizace?",
    answerList: ["Ke snížení zátěže databáze při spojování tabulek."],
  },
  {
    task: "Která normální forma je typická?",
    answerList: ["3 NF / BCNF"],
  },
  {
    task: "Proč se 5 NF nepoužívá často?",
    answerList: ["Je zde příliš mnoho tabulek."],
  },
  {
    task: "Může být databáze nenormalizovaná, v 0 NF?",
    answerList: ["Ano, databáze nemají kontrolu úrovně normalizace."],
  },
  {
    task: "Používají se příkazy SQL (Structured Query Language) pro management databáze a pro dotazování do databáze?",
    answer: true,
  },
  {
    task: "Proč se používá Query Optimizer?",
    answerList: [
      "Rychlejší vyhledávání.",
      "Přizpůsobení vyhledávacích kritérií.",
      "Použití datového slovníku k identifikaci všech příslušných indexů.",
    ],
  },
  {
    task: "Lze optimalizátor dotazů vypnout?",
    answerList: ["Ne, ale lze použít index přímo."],
  },
  {
    task: "Propojte základní kategorie příkazů.",
    answerList: [
      ["DDL", "Příkazy, které vytvářejí a udržují databázové objekty."],
      ["DML", "Příkazy, které se používají k načítání a údržbě dat."],
    ],
  },
  {
    task: "Co umožňují operace DDL?",
    answerList: ["Vytvářejí a udržují databázové objekty."],
  },
  {
    task: "Spojte DDL příkazy.",
    answerList: [
      ["CREATE", "nový objekt"],
      ["ALTER", "změna objektu"],
      ["DROP", "zrušení objektu"],
    ],
  },
  {
    task: "Zkombinujte ukázková data s vhodnými datovými typy.",
    answerList: [
      ["FLOAT / DECIMAL / MONEY", "prodejní cena"],
      ["TEXT / VARCHAR", "popis zboží"],
      ["DATE", "očekávaná doba doručení"],
      ["BLOB", "obrázek produktu"],
    ],
  },
  {
    task: "Používají se příkazy DDL přímo k vkládání dat?",
    answer: false,
  },
  {
    task: "Zkombinujte typy integritních omezení s jejich atributy z příkladu: <UU5.Bricks.Lsi><UU5.Bricks.Lsi.Item language='en'><UuApp.DesignKit.EmbeddedText codeStyle='sql' noCopy><uu5string.pre> CREATE TABLE emp    (  empno    NUMBER(4)    PRIMARY KEY,       ename    VARCHAR(10)  UNIQUE,       job      VARCHAR(9)   CHECK (JOB IN ('MANAGER','CLERK','ANALYST','PRESIDENT')),       mgr      NUMBER(4)    REFERENCES emp(empno) ON DELETE SET NULL,       hiredate DATE,       sal      NUMBER(7, 2) NOT NULL,       comm     NUMBER(7, 2),       deptno   NUMBER(2)    REFERENCES dept(deptno) ON DELETE CASCADE )  </uu5string.pre></UuApp.DesignKit.EmbeddedText></UU5.Bricks.Lsi.Item></UU5.Bricks.Lsi>",
    answerList: [
      ["empno", "PRIMARY KEY"],
      ["deptno", "FOREIGN KEY"],
      ["ename", "UNIQUE"],
      ["job", "CHECK"],
      ["sal", "NOT NULL"],
    ],
  },
  {
    task: "Kdy je možné nastavit integritní omezení?",
    answerList: [
      "Když jsou vytvořeny DB objekty.",
      "Dodatečně za předpokladu, že stávající data již splňují nová integritní omezení.",
    ],
  },
  {
    task: "Doplň klíčová slova dotazu<br/> SELECT ename _ emp_table _ id = 123",
    answerList: ["FROM", "WHERE"],
  },
  {
    task: "Kombinujte klíčová slova související s DB operacemi.",
    answerList: [
      ["SELECT", "Výběr dat z tabulek nebo pohledů."],
      ["JOIN", "Spojení více tabulek."],
      ["WHERE", "Podmínka, kterou musí splňovat data."],
      ["UPDATE", "Úprava dat v tabulce."],
    ],
  },
  {
    task: "Co to jsou logické operátory?",
    answerList: ["AND, OR, NOT"],
  },
  {
    task: "Kterou funkci splňuje BETWEEN option?",
    answerList: ["Definuje rozsah hodnot."],
  },
  {
    task: "Který příkaz je správný pro přidání nového řádku?",
    answerList: ["INSERT"],
  },
  {
    task: "<UU5.Bricks.P> Co budou tyto příkazy dělat?  </UU5.Bricks.P>  <UU5.Bricks.Lsi><UU5.Bricks.Lsi.Item language='en'><UuApp.DesignKit.EmbeddedText codeStyle='sql'><uu5string.pre> INSERT INTO dept (deptno, dname, loc) VALUES (10, 'ACCOUNTING', 'NEW YORK');  INSERT INTO dept VALUES (20, 'RESEARCH', 'DALLAS'); </uu5string.pre></UuApp.DesignKit.EmbeddedText></UU5.Bricks.Lsi.Item></UU5.Bricks.Lsi>",
    answerList: ["Oba záznamy se vloží do databáze, pokud tam již nejsou."],
  },
  {
    task: "Co bude tento příkaz dělat?   <UU5.Bricks.Lsi><UU5.Bricks.Lsi.Item language='en'><UuApp.DesignKit.EmbeddedText codeStyle='sql'><uu5string.pre> UPDATE emp  SET    sal = sal * 1.1  WHERE  deptno = 30  </uu5string.pre></UuApp.DesignKit.EmbeddedText></UU5.Bricks.Lsi.Item></UU5.Bricks.Lsi>",
    answerList: ["Zaměstnanci oddělení 30 budou mít zvýšený plat o 10%."],
  },
  {
    task: "Kterým způsobem lze odebrat zaměstnance Smith z tabulky EMP?",
    answerList: ["DELETE", "FROM emp", "WHERE", "ename = 'SMITH'"],
  },
  {
    task: "Vytvořte funkční dotaz:",
    answerList: [
      "SELECT deptno, empno, ename, MAX(sal)",
      "FROM emp",
      "WHERE sal BETWEEN 2000 AND 3000 AND deptno IN (10,12,20)",
      "GROUP BY deptno, empno, ename",
    ],
  },
  {
    task: "Co rozumíme podmínkami výběru?",
    answerList: ["Vše, co určuje, které řádky se vyberou."],
  },
  {
    task: "Co dělá podmínka výběru s vracenými daty?",
    answerList: [
      "Vrátí pouze množinu dat, která zcela splňuje všechny podmínky.",
      "Pomocí optimalizátoru dotazů krok za krokem ověří všechny části dotazovací podmínky.",
    ],
  },
  {
    task: "Připojte fragmenty dotazu SELECT správně.",
    answerList: [
      ["SELECT", "<column expressions>"],
      ["FROM", "<table name>"],
      ["WHERE", "<row selection criteria>"],
      ["ORDER BY", "<ordering expression>"],
    ],
  },
  {
    task: "Které je správné pořadí vyhodnocení podmínky?",
    answerList: [
      "parenthesis - závorky",
      "operátory porovnání (=, >,<,<>, IN, BETWEEN, IS NULL, LIKE, ...)",
      "NOT - logická negace",
      "AND - logické spojení",
      "OR - nebo",
    ],
  },
  {
    task: "Kterým příkazem mohou být odstraněny duplikáty?",
    answerList: ["DISTINCT"],
  },
  {
    task: "Co dělá LIKE option?",
    answerList: ["Umožňuje nahradit zástupné znaky ve vyhledávacím řetězci."],
  },
  {
    task: "Které jsou zástupné znaky pro LIKE v ORACLE?<br/> SELECT ename, job FROM emp WHERE ename LIKE 'S_I_'",
    answerList: ["_", "%"],
  },
  {
    task: "Správně vytvořte dotaz SELECT z fragmentů.",
    answerList: [
      "SELECT ename",
      "FROM emp",
      "WHERE sal",
      "IN",
      "2450, 2850, 2975",
    ],
  },
  {
    task: "Co značí hodnota NULL?",
    answerList: ["Chybějící hodnota"],
  },
  {
    task: "Jak může být NULL hodnota použita při dorazování?",
    answerList: ["SELECT ename, comm", "FROM emp", "WHERE comm", "IS NOT NULL"],
  },
  {
    task: "Které použití hodnoty NULL je správné?",
    answerList: ["comm IS NOT NULL", "comm IS NULL"],
  },
  {
    task: "Proč je vhodné používat skupinové funkce?",
    answerList: [
      "Pro zjištění matematických výsledků z více řádků.",
      "Není potřeba vracet všechny vyhovující záznamy tabulky.",
    ],
  },
  {
    task: "Připojte fragmenty dotazů SELECT správně:",
    answerList: [
      "SELECT ename,",
      "ROUND(sal * 1.05, 0) salary",
      "FROM emp WHERE deptno = 20",
    ],
  },
  {
    task: "Spojte fukce a jejich popisy.",
    answerList: [
      ["ROUND", "snížení počtu desetinných míst"],
      ["AVG", "součet hodnot dělený jejich počtem"],
      ["COUNT", "počet řádků, které splňují dané výběrové kritérium"],
      ["SUM", "součet hodnot atributu řádků podle kritérií"],
    ],
  },
  {
    task: "Seřaďte správně fragmenty dotazů SELECT:",
    answerList: [
      "SELECT <columns expressions> FROM <table name>",
      "WHERE <row selection criteria>",
      "GROUP BY <grouping expression>",
      "HAVING <group selection criteria>",
      "ORDER BY <ordering expression>",
    ],
  },
  {
    task: "Která jsou správná použití příkazu SELECT?",
    answerList: [
      "SELECT deptno, sum(sal) dSal <br/> FROM emp GROUP BY deptno ORDER BY deptno",
      "SELECT SUM(sal) FROM emp WHERE depno = 20",
    ],
  },
  {
    task: "Propojte fragmenty příkazů SQL.",
    answerList: [
      ["SELECT", "<columns expressions>"],
      ["FROM", "<table name>"],
      ["GROUP BY", "<grouping expression>"],
      ["HAVING", "<group selection criteria>"],
      ["ORDER BY", "<ordering expression>"],
    ],
  },
  {
    task: "Kterým způsobem se používá JOIN predikát?",
    answerList: ["Ke spojení více tabulek do jednoho výsledku."],
  },
  {
    task: "Jak používat JOIN?",
    answerList: [
      "... INNER JOIN dept ON (...",
      "... from emp natural join dept ...",
    ],
  },
  {
    task: "Vytvořte dotaz pomocí JOIN.",
    answerList: [
      "SELECT ename, emp.deptno, dname",
      "FROM   emp",
      "INNER JOIN dept ON",
      "( emp.deptno = dept.deptno )",
      "WHERE  job = 'MANAGER'",
    ],
  },
  {
    task: "Za kterým účelem se používá OUTER JOIN?",
    answerList: ["Vrací data také z tabulky, kde záznamy nejsou propojeny."],
  },
  {
    task: "Vyberte klíčová slova související se spojením tabulkek.",
    answerList: [
      ["NATURAL JOIN", "Spojení tabulek podle vztahu PK-FK."],
      ["LEFT / RIGHT OUTER JOIN", "Poloviční spojení."],
      ["OUTER JOIN", "Chybějící atributy z obou tabulek jsou nahrazeny NULL."],
    ],
  },
  {
    task: "Který příklad spojení tabulek je nesprávný?",
    answerList: ["... FROM emp RIGHT OUTER dept ..."],
  },
  {
    task: "K čemu se RIGHT OUTER JOIN používá?",
    answerList: ["Chybějící data z jedné tabulky nahradí NULL."],
  },
  {
    task: "Dokončete správně příkazy JOIN a výsledky.",
    answerList: [
      "SELECT ename, emp.deptno, dname",
      "FROM   emp INNER JOIN dept",
      "ON ( emp.deptno = dept.deptno )",
      "WHERE  job = 'MANAGER'",
    ],
  },
  {
    task: "Co jsou poddotazy?",
    answerList: ["mechanismus pro provedení dotazu v několika krocích"],
  },
  {
    task: "Vytvořte funkční poddotaz pro seznam oddělení, která mají zaměstnance, kteří jsou manažery.",
    answerList: [
      "SELECT dname, loc  FROM   dept",
      "WHERE  deptno IN",
      "(SELECT deptno FROM   emp",
      "WHERE  job = 'MANAGER')",
      "ORDER  BY dname",
    ],
  },
  {
    task: "<UuApp.DesignKit.EmbeddedText codeStyle='sql'>\r SELECT deptno, ename, sal \r FROM   emp e1 \r WHERE  sal = (SELECT Max(sal) \r               FROM   emp e2 \r               WHERE  e1.deptno = e2.deptno) \r ORDER  BY deptno \r </UuApp.DesignKit.EmbeddedText>\r <UU5.Bricks.P>\r Který bude výsledek tohoto dotazu? \r </UU5.Bricks.P>",
    answerList: [
      "Vrátí seznam zaměstnanců s nejvyšším platem pro každé oddělení.",
    ],
  },
  {
    task: "Které příkazy mohou používat poddotazy?",
    answerList: ["UPDATE", "DELETE"],
  },
  {
    task: "Vytvořte funkční UPDATE",
    answerList: [
      "UPDATE emp e1",
      "SET    sal = (SELECT Round(Avg(sal), 0)",
      "FROM   emp e2",
      "WHERE  e1.deptno = e2.deptno)",
    ],
  },
  {
    task: "Zkombinujte příklady příkazů a jejich charakteristiku.",
    answerList: [
      ["EXISTS", "Poddotaz nalezne nějaký záznam."],
      ["IN", "Poddotaz vrací list ID pro hlavní dotaz."],
      ["FROM emp e1", "Alias pro jednoznačné určení tabulky."],
    ],
  },
  {
    task: "K čemu slouží alias tabulky?",
    answerList: ["Jednoznačně identifikuje tabulku."],
  },
  {
    task: "Vytvořte funkční poddotaz z fragmentů, který vymaže zaměstnance, jejichž plat je vyšší než plat jejich manažera.",
    answerList: [
      "DELETE FROM emp e1",
      "WHERE  EXISTS",
      "(SELECT * FROM   emp e2",
      "WHERE  e1.sal > e2.sal",
      "AND e1.mgr = e2.empno)",
    ],
  },
  {
    task: "Můžeme použít příkaz UPDATE pro VIEW?",
    answerList: ["Ano, ale má to specifická omezení."],
  },
  {
    task: "Zaškrtněte všechna pravdivá tvrzení o View:",
    answerList: [
      "View lze použít ke zjednodušení přístupu k databázovým tabulkám.",
      "View mohou obsahovat funkce, poddotazy nebo spojení více tabulek.",
    ],
  },
  {
    task: "Která syntaxe pro vytvoření VIEW je správná?",
    answerList: [
      "CREATE VIEW dept_sal",
      "AS",
      "SELECT deptno, sum(sal) totsal",
      "FROM   emp",
      "GROUP  BY deptno",
    ],
  },
  {
    task: "Proč používáme INDEX?",
    answerList: ["Pro rychlejší vyhledávání."],
  },
  {
    task: "Která syntaxe je správná  pro vytvoření indexu pro atribut <UU5.Bricks.Code>depno</UU5.Bricks.Code> v tabulce <UU5.Bricks.Code>emp</UU5.Bricks.Code>?",
    answerList: ["CREATE", "INDEX emp_i01", "ON", "emp", "(deptno)"],
  },
  {
    task: "Co je to Access plan?",
    answerList: ["Jeho cílem je zjistit, jaké požadavky má dotaz na databázi."],
  },
  {
    task: "Jak pracuje System Optimizer s indexy?",
    answerList: ["Identifikuje použitelné indexy pro každý jednotlivý dotaz."],
  },
  {
    task: "Mohlo by se zpomalit provedení operace UPDATE aplikováním na sloupce, které jsou indexovány?",
    answer: true,
  },
  {
    task: "Je atribut pro kód velikosti oblečení (XS, S, M, L, XL, XXL) vhodný pro vytvoření indexu?",
    answerList: ["Není."],
  },
  {
    task: "Co jsou databázové transakce?",
    answerList: [
      "Transakce zajišťují konzistenci při úpravě dat v relačních databázích.",
    ],
  },
  {
    task: "Co je zkratka ACID?",
    answerList: ["Atomicity, Consistency, Isolation, Durability"],
  },
  {
    task: "Co znamená Concurrency?",
    answerList: [
      "Řešení problému paralelních transakcí.",
      "Dokud není transakce potvrzena příkazem COMMIT, jsou data uzamčena pro další zpracování.",
    ],
  },
  {
    task: "Jak spravujeme transakce?",
    answerList: [
      "Transakce je spouštěna automaticky.",
      "Transakce musí být potvrzena příkazem COMMIT.",
    ],
  },
  {
    task: "Může být použití transakcí v relační databázi vypnuto?",
    answer: false,
  },
  {
    task: "Spojte slova tvořící zkratku ACID a jejich charakteristiku.",
    answerList: [
      [
        "Atomicity",
        "Všechny operace v rámci transakce musí být provedeny nebo zrušeny.",
      ],
      [
        "Consistency",
        "Po dokončení transakce musí databáze dosáhnout konzistentního stavu.",
      ],
      [
        "Isolation",
        "Průběžné výsledky neúplných transakcí nejsou přístupné jiným transakcím.",
      ],
      [
        "Durability",
        "Commitovanou transakci nelze vrátit zpět nebo změny ztratit.",
      ],
    ],
  },
  {
    task: "MongoDB je multiplatformní nativní dokumentová databáze.",
    answer: true,
  },
  {
    task: "MongoDB je _ databáze.",
    answerList: ["NoSQL"],
  },
  {
    task: "Který nativní formát souborů používá MongoDB pro uchováváni dat?",
    answerList: ["BSON"],
  },
  {
    task: "MongoDB je licencován jako _ software.",
    answerList: ["open source"],
  },
  {
    task: "Co patří mezí hlavní funkce pro zpracování dat v MongoDB?",
    answerList: ["Ad hoc dotazy", "Indexace", "Agregace"],
  },
  {
    task: "Co znamenají následující zkratky?",
    answerList: [
      [
        "SQL",
        "Standardizovaný strukturovaný dotazovací jazyk, používán pro práci s daty v relačních databázích.",
      ],
      [
        "NoSQL",
        "Databázový koncept, ve kterém datové úložiště i zpracování dat používají jiné prostředky než tabulková schémata.",
      ],
    ],
  },
  {
    task: "Co znamená zkratka SQL?",
    answerList: ["Structured Query Language"],
  },
  {
    task: "NoSQL databáze je vhodná tehdy, když se používá dynamické datové schéma.",
    answer: true,
  },
  {
    task: "Které pojmy SQL odpovídají pojmu NoSQL?",
    answerList: [
      ["Relační tabulka", "Kolekce dat"],
      ["Řádky tabulky", "Strukturovaný dokument formátu JSON"],
      ["Sloupec tabulky", "Položka nebo pole ve strukturovaném dokumentu"],
    ],
  },
  {
    task: "Co z následujícího <UU5.Bricks.Strong>platí</UU5.Bricks.Strong> pro NoSQL databáze?",
    answerList: [
      "Neexistuje žádná předem daná datová struktura.",
      "Nejsou zde integritní omezení.",
      "Transakční zpracování defaultně probíhá na úrovni jednoho dokumentu v kolekci.",
    ],
  },
  {
    task: "Do kterého typu NoSQL databáze patří MongoDB?",
    answerList: ["NoSQL dokumentové databáze"],
  },
  {
    task: "Které vlastnosti mají SQL databáze (RDBMS) pro transakční zpracování?",
    answerList: [
      "Při selhání některého z příkazů může být celá transakce vrácena zpět.<br/> (v závislosti na nastavení transakčního zpracování a ošetření výjimek)",
      "Jednotlivé transakce jsou vzájemně izolované.<br/> (změny dat lze číst už před ukončením transakce v závislosti na nastavení úrovně izolace, ale do ukončení jedné transakce je nelze jinou transakcí měnit)",
    ],
  },
  {
    task: "Která specifika má normalizace při definici datového modelu v MongoDB?",
    answerList: [
      "Dovoluje (preferuje) výskyt duplicitních dat.",
      "Nemá pevně definovaný datový model - je řízen dynamicky. <br/> (po přidání políčka ve formuláři aplikace není potřeba v NoSQL databázi nic měnit - v SQL se musí nejprve tabulka o nový atribut rozšířit)",
      "Konzistence dat závisí na aplikaci, databáze nemá téměř žádné restrikce. <br/> (výjimkou je například unikátní ID pole v každém dokumentu kolekce)",
    ],
  },
  {
    task: "Dá se použít MongoDB jako cloudová služba (DBaaS)?",
    answer: true,
  },
  {
    task: "Jeden z postupů pro spuštěni procesu serveru databáze MongoDB je pomocí příkazové řádky. <br/> Seřaďte správně jednotlivé kroky:",
    answerList: [
      "Spustit terminál (<UU5.Bricks.Code>cmd.exe</UU5.Bricks.Code> u Windows OS) a  <br/>přejit do složky s nainstalovanou databází <br/> (například <UU5.Bricks.Code>cd C:\\MongoDB\\Server\\4.2\\bin</UU5.Bricks.Code>)",
      "Spustit příkaz <UU5.Bricks.Code>mongod</UU5.Bricks.Code>",
      "Zkontrolovat výpis konzole a ověřit, že DB běží.",
    ],
  },
  {
    task: "Pomocí kterého příkazu se spoušti MongoDB klient?",
    answerList: ["mongo"],
  },
  {
    task: "Přiřaďte příslušné příkazy k následujícím operacím.",
    answerList: [
      ["MongoDB server", "mongod - spustit<br/> CTRL/Command + C - ukončit"],
      ["MongoDB klient", "mongo - spustit<br/> exit - opustit"],
    ],
  },
  {
    task: "Databáze v MongoDB vzniknou automaticky při prvním zápisu.",
    answer: true,
  },
  {
    task: "MongoDB má integrovaný clustering.",
    answer: true,
  },
  {
    task: "Co je to clustering databazí?",
    answerList: [
      "Proces kombinování více než jednoho serveru nebo instancí připojení databáze.",
    ],
  },
  {
    task: "Které výhody přináší clustering databází?",
    answerList: ["Vysokou dostupnost dat", "Snížení doby načítaní dat"],
  },
  {
    task: "Co znamenají následující principy clusteringu?",
    answerList: [
      ["Replikace", "Zajišťuje, že na vícero MongoDB nodech jsou stejná data."],
      [
        "Sharding",
        "Rozprostření jedné databáze a kolekce dokumentů přes vícero nodů z důvodu škálovaní.",
      ],
    ],
  },
  {
    task: "Při shardingu jsou data z jedné tabulky podle _ rozdělena do více fyzických tabulek.",
    answerList: ["Shard key"],
  },
  {
    task: "Co je MongoDB Compass?",
    answerList: [
      "Nástroj s GUI, které umožňuje vizualizovat data.",
      "Nástroj pro podporu agregace dat.",
    ],
  },
  {
    task: "Nástroj MongoDB Compass je GUI, které umožňuje rychle _ strukturu dat v databázi a provádět dotazy ad hoc - to vše _ dotazů jazyka MongoDB.",
    answerList: ["vizualizovat", "nevyžaduje znalost"],
  },
  {
    task: "Co všechno umožnuje nástroj Mongo DB Compass?",
    answerList: [
      "CRUD operace nad daty",
      "Import/export dat do JSON",
      "Spravovat indexy",
    ],
  },
  {
    task: "Co umožňují nástroje Robo 3T a Studio 3T?",
    answerList: [
      "Provádět CRUD operace včetně složitějších agregačních funkcí.",
      "Dotazy vytvořit stylem SQL syntaxe.",
    ],
  },
  {
    task: "Které výhody má nástroj Studio 3T?",
    answerList: [
      "Migrace databáze a relace mezi SQL a MongoDB.",
      "Umožňuje používat SQL pro dotazování v MongoDB.",
      "Vizuální tvorba dotazů.",
    ],
  },
  {
    task: "Který zápis JSON formátu je správný?",
    answerList: [
      "<UU5.CodeKit.CodeViewer codeStyle='json'> {  'height': 186 } </UU5.CodeKit.CodeViewer>",
    ],
  },
  {
    task: "<UU5.CodeKit.CodeViewer codeStyle='json'> {   'gender': 'male' } </UU5.CodeKit.CodeViewer> <UU5.Bricks.P>  Klíčem v uvedeném příkladu je '_' a hodnotou '_'.  </UU5.Bricks.P>",
    answerList: ["gender", "male"],
  },
  {
    task: "Který zápis JSON formátu je správný?",
    answerList: [
      "<UU5.CodeKit.CodeViewer codeStyle='json'> {    'name':'John',    'age':30,    'cars':{       'car1':'Ford',       'car2':'BMW',       'car3':'Fiat'    } } </UU5.CodeKit.CodeViewer>",
    ],
  },
  {
    task: "Je JSON formát dat typu key-value (klíč-hodnota) ?",
    answer: true,
  },
  {
    task: "Které zápisy JSON formátu jsou správné?",
    answerList: [
      "<UU5.CodeKit.CodeViewer codeStyle='json'> {   'name':'John',   'age':30,   'car': true } </UU5.CodeKit.CodeViewer>",
      "<UU5.CodeKit.CodeViewer codeStyle='json'> {   'name':'Will Smith',   'age': 51,   'cars':[   null   ] } </UU5.CodeKit.CodeViewer>",
    ],
  },
  {
    task: "Jak se nazývají následující datové formáty v JSONu?",
    answerList: [
      ["textový řetězec", "JSONString"],
      [
        "číslo (celočíselné nebo reálné, včetně zápisu s exponentem)",
        "JSONNumber",
      ],
      ["pole", "JSONArray"],
      ["logická hodnota", "JSONBoolean"],
    ],
  },
  {
    task: "<UU5.Bricks.P>  Jaká je struktura operace insert? </UU5.Bricks.P> _._._(_)",
    answerList: [
      "db",
      "collection",
      "insert",
      "<document or array of documents>",
    ],
  },
  {
    task: "<UU5.Bricks.P>  Jaká je struktura operace find? </UU5.Bricks.P> _._._(_, _)",
    answerList: ["db", "collection", "find", "<criteria>", "<projection>"],
  },
  {
    task: "Parametr _ příkazu remove zajistí smazání jen prvního výskytu.",
    answerList: ["justOne"],
  },
  {
    task: "Co znamenají parametry query a update v operaci update?",
    answerList: [
      ["query", "podmínka, pro které záznamy se má změna provést"],
      ["update", "předmět změny"],
    ],
  },
  {
    task: "Co znamenají parametry criteria a projection v operaci find?",
    answerList: [
      ["criteria", "parametry hledání"],
      ["projection", "filrování atributů, které chceme zobrazit"],
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>, která je prázdná. Do ní chceme vložit studenta s následujícími parametry:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r 'name':'Martin'\r 'age': 20\r 'faculty': 'Information Technology'\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r Jak bude tato databáze vypadat? \r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r db.students.insert(\r    {\r       'name':'Martin',     \r       'age':20,    \r       'faculty':'Information Technology'\r    }\r )\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>, která je prázdná. Do ní chceme vložit seznam studentů. Označte všechny validní zápisy.\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r db.students.insertMany(\r [\r    {\r       'name':'Martin',\r       'age':20,\r       'faculty':'Information Technology'\r    },\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r ]\r )\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r var studentsList =\r [\r    {\r       'name':'Martin',\r       'age':20,\r       'faculty':'Information Technology'\r    },\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r ];\r \r db.students.insertMany(studentsList);\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r  Pomocí kterého příkazu lze vyhledat všechny studenty se jménem Martin?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre> db.students.find({'name':'Martin'} ) </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management',\r       'address': {\r         'street' : 'Dictum Court',\r         'number' : 415.0,\r         'city' : 'Yukon',\r         'country' : 'Christmas Island'\r       }\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology',\r       'address': {\r         'street' : 'Bushwick Place',\r         'number' : 804.0,\r         'city' : 'Waterview',\r         'country' : 'Suriname'\r       }\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r <UU5.Bricks.P>\r   Pomocí kterého příkazu lze vyhledat všechny studenty, kteří jsou z Yukonu?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre> db.students.find({'address.city':'Yukon'}) </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r  Pomocí kterého příkazu lze změnit obor všech studentů na 'Information Technology'?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre> db.students.update(    {     },    {       '$set':{          'faculty':'Information Technology'       }    },    {       'multi':true    } ) </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code> a chceme smazat všechny studenty mladší 18 let.\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r db.students.remove('age':{$lt:18})\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r  Pomocí kterého příkazu lze změnit věk studenta se jménem Martin?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre> db.students.update(    {    'name':'Martin'    },    {       '$set':{          'age': 21       }    } ) </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "Který index používá MongoDB?",
    answerList: ["B-Tree index"],
  },
  {
    task: "_ slouží ke zrychlení vyhledávacích a dotazovacích procesů v databázi.",
    answerList: ["Indexy"],
  },
  {
    task: "Co znamenají následující typy indexů v MongoDB?",
    answerList: [
      ["Hashed Index", "Index založený na hash"],
      ["Text Indexes", "Index pro vyhledávání v textu"],
      ["Jednoduchý index", "Index nad jedním atributem"],
      ["Multikey Index", "Index nad atributem pole"],
    ],
  },
  {
    task: "Indexy mohou zpomalit databáze.",
    answer: true,
  },
  {
    task: "<UU5.Bricks.P> Jaká je struktura operace tvorby indexu? </UU5.Bricks.P> db.collection._(_, _)",
    answerList: ["createIndex", "keys", "options"],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme databázi <UU5.Bricks.Code>students</UU5.Bricks.Code> a potřebujeme zrychlit vyhledávaní studentu podle adresy.\r  <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management',\r       'address': {\r         'street' : 'Dictum Court',\r         'number' : 415.0,\r         'city' : 'Yukon',\r         'country' : 'Christmas Island'\r       }\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology',\r       'address': {\r         'street' : 'Bushwick Place',\r         'number' : 804.0,\r         'city' : 'Waterview',\r         'country' : 'Suriname'\r       }\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r </UU5.Bricks.P>\r <UU5.Bricks.P>\r  Pomocí kterého příkazu nastavíme index nad položkou <UU5.Bricks.Code>address</UU5.Bricks.Code>?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json' showCopyButton=false><uu5string.pre> db.students.createIndex({'address': 1}) </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "Pomocí kterého příkazu lze vypsat všechny indexy databáze <UU5.Bricks.Code>students</UU5.Bricks.Code>?",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r db.students.getIndexes()\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "Jaké metody umožňuje pro provedení agregací MongoDB?",
    answerList: ["pipeline", "map/reduce", "agregační framework"],
  },
  {
    task: "Přiřaď ekvivalentní NoSQL agregační funkce k SQL příkazům.",
    answerList: [
      ["SELECT", "$project"],
      ["WHERE", "$match"],
      ["GROUP BY", "$group"],
      ["ORDER BY", "$sort"],
      ["LIMIT", "$limit"],
    ],
  },
  {
    task: "Co znamenají následující agregační operátory v MongoDB?",
    answerList: [
      ["$avg", "Průměr hodnot atributu."],
      ["$push", "Vloží hodnotu do pole."],
      ["$addToSet", "Vloží hodnotu do pole, pokud tam ještě není."],
      ["$max", "Maximální hodnota atributu."],
    ],
  },
  {
    task: "Jak můžeme vytvořit dotaz s exekučním plánem?\r db.lide._({'jmeno':'tom'})._('_')",
    answerList: ["find", "explain", "executionStats"],
  },
  {
    task: "_ určuje volitelná kritéria pro výběr dokumentů.",
    answerList: ["query"],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r   Pomocí kterého příkazu lze zjistit celkový počet studentů?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r > db.students.aggregate([ {\r    $group: {\r       _id: null,\r       'TotalCount': {\r          $sum:1\r       }\r    }\r } ] );\r </uu5string.pre>\r </UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r   Pomocí kterého příkazu lze zjistit celkový počet studentů podle studované fakulty?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r > db.students.aggregate([ {\r    $group: {\r       _id: 'faculty',\r       'TotalCount': {\r          $sum:1\r       }\r    }\r } ] );\r </uu5string.pre>\r </UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r   Pomocí kterého příkazu lze zjistit celkový počet studentů, jejichž věk je devatenáct nebo dvacet let?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r > db.students.aggregate([ \r   { $match: { age: { $gt: 18, $lt: 21} } },\r   { $group: { _id: null, count: { $sum: 1} } }\r ] );\r </uu5string.pre>\r </UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'gender': 'male',\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'gender': 'female',\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r <UU5.Bricks.P>\r   Pomocí kterého příkazu lze zjistit průměrný věk můžu a žen?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r > db.students.aggregate([\r   {\r     $group: {\r       _id:'$gender', \r       'averageAge': {\r         $avg: '$age'\r       } \r     }\r   }\r ])\r </uu5string.pre>\r </UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "<UU5.Bricks.P>\r  Máme kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>:\r </UU5.Bricks.P>\r <UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r [\r    {\r       'name':'Peter',\r       'age':19,\r       'faculty':'Economics and management'\r    },\r    {\r       'name':'Anna',\r       'age':21,\r       'faculty':'Information Technology'\r    }\r    ...\r ]\r </uu5string.pre></UuApp.DesignKit.EmbeddedText>\r \r <UU5.Bricks.P>\r   Jak lze pomocí funkce <UU5.Bricks.Code>mapReduce</UU5.Bricks.Code> zjistit celkový počet studentů podle oboru studia?\r </UU5.Bricks.P>",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText showCopyButton=false codeStyle='json'><uu5string.pre>\r >db.students.mapReduce(\r    function() {emit(this.faculty,1);},  //map function\r    function(faculty,values) {return Array.sum(values)}, {   //reduce function\r       'out': 'totalStudentsFaculty',\r    }\r ).find();\r </uu5string.pre>\r </UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "Pomocí kterého operátoru lze rozbalit pole <UU5.Bricks.Code>subjects</UU5.Bricks.Code> v kolekci <UU5.Bricks.Code>students</UU5.Bricks.Code>?",
    answerList: [
      "<UuApp.DesignKit.EmbeddedText codeStyle='javascript' showCopyButton=false><uu5string.pre> db.students.aggregate([{$unwind:'$subjects'}]) </uu5string.pre></UuApp.DesignKit.EmbeddedText>",
    ],
  },
  {
    task: "Which of the following statements about project management are true?",
    answerList: [
      "Project management has an impact on the profitability of success.",
      "Project management orchestrates other project disciplines to achieve the project goals.",
      "Thanks to it we can compare with other project’s key factors.",
    ],
  },
  {
    task: "Based on the Software Project Outcome Rates: 2018 Report, what percentage of projects were completed on time and within budget (for the year of 2017)?",
    answerList: ["29 %"],
  },
  {
    task: "Každý podnik musí pokrýt 12 procesů - _ klíčových a _ podpůrných.",
    answerList: ["cíle", "finální výstupy"],
  },
  {
    task: "In organization, we have 12 processes. We divide these processes into Core processes and Support processes. Project management is one of the Core processes.",
    answer: false,
  },
  {
    task: "Which of the definitions of project management are true?",
    answerList: [
      "A certain uniqueness is typical for a project.",
      "A project can have a tangible form, however, Unicorn company focuses primarily on the intangible form of projects.",
    ],
  },
  {
    task: "Projekt je úspěšný pokud:",
    answerList: [
      "přimět lidi dělat to, co chceme",
      "přimět lidi přidávat hodnotu",
      "mít správné lidi na správných místech",
      "dodávat produkty a služby zákazníkům",
    ],
  },
  {
    task: "Technologie jsou pro úspěch projektu _ důležité než-li procesy procesy a lidi.",
    answerList: ["méně"],
  },
  {
    task: "Které z následujících parametrů musíme dodržovat při řízení projektu?",
    answerList: ["kvalita", "rozsah", "riziko"],
  },
  {
    task: "Which of the definitions about the role of a project manager are true?",
    answerList: [
      "A project manager must mainly ensure that at any point during the project, everyone knows what they should do and by when.",
      "A project manager ensures that everyone in the team has what they need to work.",
      "A project manager ensures that team members work on the most suitable tasks.",
      "A project manager focuses on delivery in time and on quality.",
    ],
  },
  {
    task: "What are the project phases?",
    answerList: [
      "Initiation",
      "Planning",
      "Execution",
      "Monitoring and Controlling",
      "Closing",
    ],
  },
  {
    task: "Jaké jsou nejběžnější metodiky projektového řízení?",
    answerList: ["PRINCE2 (+ PRINCE2 Agile)", "IPMA", "PMI PMBOK"],
  },
  {
    task: "Která tvrzení o metodice Prince2 jsou pravdivá?",
    answerList: [
      "<UU5.Bricks.Strong> Prince2 Agile </UU5.Bricks.Strong> patří mezi agilní techniky a upravuje dílčí aspekty metodiky tak,  aby byly kompatibilní s agilními metodami, jako je SCRUM.",
      "Je to <UU5.Bricks.Strong> nejvíce populární metodika </UU5.Bricks.Strong> a certifikace PM v <UU5.Bricks.Strong> České republice </UU5.Bricks.Strong>.",
      "Je <UU5.Bricks.Strong> velmi normativní </UU5.Bricks.Strong> - lze se ji snadno naučit a použít.",
    ],
  },
  {
    task: "_ software development/project methodologies are based on an 'engineering approach' –⁠ planning all aspects well, manufacturing with precision, ensuring quality control and delivery.",
    answerList: ["Tradiční"],
  },
  {
    task: "<UU5.Bricks.Strong> Agilní </UU5.Bricks.Strong> metodiky vycházejí z předpokladu, že nejlepším možným způsobem, jak dosáhnout úspěšné implementace,  je co nejrychlejší vývoj softwaru, jeho dodání zákazníkovi (i s omezenou funkčností) a následně upravovat software na základě připomínek.",
    answer: true,
  },
  {
    task: "What goals are we trying to achieve with the concept of Production Lines?",
    answerList: [
      "predictable and guaranteed delivery",
      "continuous improvement",
      "fast requirements delivery",
      "ability to change the scope",
      "reduce risks",
    ],
  },
  {
    task: "What is the main Unicorn Production Line?",
    answerList: ["uuApp Production Line"],
  },
  {
    task: "Besides Processes, Tools, Knowledge Base, and Marketing Mix, uuApp Production Line also includes _.",
    answerList: ["Component Libraries, Evangelists"],
  },
  {
    task: "Unicorn Universe Process is inspired by which methodologies?",
    answerList: ["IDEF", "RUP", "PRINCE2", "ITIL", "SCRUM"],
  },
  {
    task: "There is one “right” (ultimate) project management methodology. This is the reason why Unicorn utilize the fundamentals of RUP exclusively.",
    answer: false,
  },
  {
    task: "The dual track in Agile consists of Definition Track and Delivery Track, and utilizes Product and Delivery Backlog.",
    answer: true,
  },
  {
    task: "Which of the uuApp Processes from Product cycle and Delivery cycle overlap?",
    answerList: ["Business Design, UAT & Deployment"],
  },
  {
    task: "Connect the uuApp Processes with their products.",
    answerList: [
      ["Requirements Analysis", "Business Requests"],
      ["Business Design", "Business Model"],
      ["Design", "Application Model"],
      ["Implementation & Testing", "uuApp (code, test cases, etc.)"],
      ["Deployment & Support", "uuApp"],
    ],
  },
  {
    task: "Because there are many of the uuApp Processes, it’s better to utilize different support applications from the market that can be sometimes connected, and that have their own vision.",
    answer: false,
  },
  {
    task: "Which roles can be typically found in Integration Team?",
    answerList: [
      "uuApp Project Manager",
      "uuApp Business Architect",
      "uuApp Software Architect",
      "uuApp Test Architect",
    ],
  },
  {
    task: "The Integration Team and Delivery Team can be organizationally separated, but they should cooperate closely.",
    answer: true,
  },
  {
    task: "Select the correct statement about the cooperation approach between Unicorn units.",
    answerList: [
      "The cooperation approach between the Executive Units or Product Hub and Software Factory can differ.",
    ],
  },
  {
    task: "What are some of the main benefits of the uuApp Production Line?",
    answerList: [
      "Early mitigation of risks and problems.",
      "Predictable and guaranteed delivery.",
      "Reduction of the amount of bugs and reimplementation.",
      "No vendor or personal lock.",
      "Measurement and continuous improvement.",
    ],
  },
  {
    task: "What are some of the limitations of uuApp Production Line?",
    answerList: [
      "More formal approach than the market standard.",
      "Reduction of a creative space.",
      "Software development is more expensive in the analysis and design phase.",
      "Reduction of space for technical individuals.",
    ],
  },
  {
    task: "uuApp Production Line is based on _. Therefore, the development cycle _ a fixed time frame.",
    answerList: ["regular cycles", "must have"],
  },
  {
    task: "Přiřaďte klíčový artefakt k aktivitě, pro kterou se používá.",
    answerList: [
      [
        "A4",
        "Artefakt, jehož účelem je jednoduše formulovat cíle a záměr naší práce, včetně toho, jak dosáhnout cíle za stanovených KKTR podmínek.  Všechny klíčové nápady by měly být napsány tak, aby se vešly na list papíru A4.",
      ],
      [
        "Klíčový úkol",
        "Slouží ke správě složitých úkolů v rámci organizační jednotky, jejichž řešení trvá několik měsíců a které řeší jedna osoba nebo malá skupina lidí.",
      ],
      [
        "Organizační struktura",
        "Organizace interního a externího projektového týmu a komunikační matice.",
      ],
      [
        "Plán zdrojů",
        "Při jejich plánování zaznamenáváme, které zdroje budeme kdy potřebovat.",
      ],
      [
        "Interní pravidla",
        "Artefakt, kterým jsme stanovili závazná pravidla v rámci organizační jednotky, která rozšiřuje obecně platné podmínky zaměstnávání ve společnosti.",
      ],
    ],
  },
  {
    task: "Co platí pro zahájení projektu?",
    answerList: [
      "Plán by měl být založen na výstupech.",
      "Obsah A4 projektu by měl být potvrzen zadavatelem nebo přímo zákazníkem.",
    ],
  },
  {
    task: "Co je účelem zahajovací schůzky (Kick-off)?",
    answerList: [
      "představit tým",
      "porozumět pozadí projektu",
      "dohodnout se na efektivní spolupráci",
      "pochopit, co je třeba udělat",
    ],
  },
  {
    task: "Úvodní schůzku (tzv. Kick-off) připravujeme v úzké spolupráci s managementem klienta během prvních 10 dnů projektu.",
    answer: true,
  },
  {
    task: "Které z následujících aktivit by měly být součástí zahájení projektu?",
    answerList: [
      "Objasnit, co a jak by měl projekt skutečně dělat.",
      "Vypracovat klíčové úkoly na základě specifikace cílů.",
      "Vytvořit vhodné implementační prostředí.",
    ],
  },
  {
    task: "What are the most important inputs when handover a project from sales to realization?",
    answerList: ["Contract", "Proposal", "Benefits", "QSTB"],
  },
  {
    task: "Jaké role můžete potkat ve standardním IT projektovém týmu?",
    answerList: [
      "Projektový Manažer",
      "Business Architect",
      "Konfigurační Manažer",
    ],
  },
  {
    task: "Přiřaďte každé roli její odpovědnosti.",
    answerList: [
      [
        "Projektový Manažer",
        "V první řadě zodpovídá za plánování, pokrok a úspěch dokončení projektů v oblasti ICT, jakož i za dosažení očekávané přidané hodnoty.",
      ],
      [
        "Business Architect",
        "Je odpovědný za správu požadavků zákazníka. Toto je klíčová role pro všechny projekty, které vyžadují hluboké pochopení obchodních procesů zákazníka, jejich analýzu, dokumentace a zejména vývoj řešení.",
      ],
      [
        "Software Architect",
        "Technicky vede tým, který se podílí na přípravě projektu řešení, a také tým, který řešení implementuje. Dokáže navrhnout a implementovat řešení, která splňují všechny funkční i nefunkční požadavky v rámci KKTR.",
      ],
      [
        "Test Architect",
        "Odpovídá za celkovou kvalitu výstupů i za jejich soulad s cílovou kvantitou, termínem a rozpočtem. Hledá odpověď na otázku 'Jak a co testovat', zodpovídá za řízení rizik a priorit.",
      ],
      [
        "Konfigurační Manažer",
        "Přebírá odpovědnost za instalaci a správu IT prostředí projektu, vývoj buildů a instalací apod. Tato role nese přímou odpovědnost za funkčnost instalace pro zákazníka.",
      ],
    ],
  },
  {
    task: "<UU5.Bricks.P>  <UU5.Bricks.Em>Je schopen samostatně programovat pomocí příslušného programovacího jazyka a souvisejících technologií. V rámci své práce se podílí na realizaci technického projektu. Má dobré komunikační dovednosti pro komunikaci s technickým specialistou zákazníka. </UU5.Bricks.Em> </UU5.Bricks.P> <UU5.Bricks.P>  Která role odpovídá tomuto popisu? </UU5.Bricks.P>",
    answerList: ["seniorní vývojář"],
  },
  {
    task: "Assign the team worker classification with the type of motivation.",
    answerList: [
      ["Workers focused on task (workaholics).", "Motivated by the work."],
      [
        "Workers focused on cooperation (friends).",
        "Motivated by the existence of the team and presence of coworkers.",
      ],
      [
        "Workers focused on themselves (egoists).",
        "Motivated by their success.",
      ],
    ],
  },
  {
    task: "Team is a group of people / organism that was created to achive some goals by execution of the coordinated actions.",
    answer: true,
  },
  {
    task: "What aspects should project manager access when creating a new team?",
    answerList: [
      "Project constraints",
      "Team maturity",
      "Long-term vision for the team/team members",
      "Way of delivery (Waterfall/Scrum, etc)",
    ],
  },
  {
    task: "In Fix Time – Fix Price project is the main focus on _ while Time & Material project is focused on _.",
    answerList: ["budget, deadlines, outputs", "processes and outputs"],
  },
  {
    task: "Seřaďte činnosti v rámci procesu řízení komunikace tak, jak na sebe navazují.",
    answerList: [
      "Definice konkrétní informační potřeby",
      "Zahájení komunikace",
      "Řízení komunikace",
      "Ukončení komunikace",
    ],
  },
  {
    task: "Přiřaďte aktivity k dané fázi procesu řízení komunikace.",
    answerList: [
      [
        "Definice konkrétní informační potřeby",
        "nastavena organizační a komunikační struktura",
      ],
      [
        "Zahájení komunikace",
        "zavedení komunikačního plánu všem zúčastněným stranám",
      ],
      [
        "Řízení komunikace",
        "řízení sdílení informací a komunikace ve všech fázích projektu",
      ],
      [
        "Ukončení komunikace",
        "oficiální uzavření všech pravidelných a nepravidelných informačních povinností",
      ],
    ],
  },
  {
    task: "Který komunikační kanál je nejlepší použít v případě, že máme pouze kusé informace o neočekávaných událostech na projektu, nebo informace s vysokou prioritou a časovou naléhavostí?",
    answerList: ["zpráva (hovor, e-mail, SMS apod.)"],
  },
  {
    task: "Která tvrzení ohledně schůzky jako aktivního komunikačního nástroje v rámci projektů jsou pravdivá?",
    answerList: [
      "Úroveň informací musí být nastavena podle účastníků schůzky/cílové skupiny.",
      "Musí mít jasnou agendu a cíle.",
    ],
  },
  {
    task: "Přiřaďte nástroj ke způsobu komunikace a jeho využití na projektu.",
    answerList: [
      [
        "Aktivní",
        "Report",
        "Může být použit jako podkladový materiál pro schůzku o stavu projektu. Jeho obsah by měl být vždy schválen zúčastněnými stranami.",
      ],
      [
        "Pasivní",
        "Portál pro sdílení informací",
        "Samoobslužné weby pro pasivní sdílení informací a výstupů, pokud je to možné. Může mít několik úrovní.",
      ],
    ],
  },
  {
    task: "Jaké informace by měl obsahovat seznam kontaktů v rámci komunikačního schématu projektu?",
    answerList: [
      "jméno a příjmení",
      "role",
      "telefonní číslo, e-mail",
      "vztahy",
    ],
  },
  {
    task: "Co vše by měla obsahovat organizační struktura projektu?",
    answerList: [
      "Hierarchii všech stran účastnících se projektu, struktury týmů, vztahy v rámci projektových týmů a role projektu.",
    ],
  },
  {
    task: "U velkých projektů je dobrým zvykem připravit distribuční seznam (např. seznam e-mailů) pro různé druhy zpráv.",
    answer: true,
  },
  {
    task: "Co je potřeba udělat, když během telefonního hovoru dojde k důležitému projektovému rozhodnutí?",
    answerList: [
      "Vše by mělo být zaznamenáno v zápisu a zúčastněné strany by měly být informovány. Pokud je to možné, jsou zaznamenány a zpracovány také následné činnosti.",
    ],
  },
  {
    task: "Který komunikační kanál je nejvhodnější použít, pokud se na projektu vyskytne vážný problém?",
    answerList: [
      "Telefonní hovor, protože je to nejrychlejší způsob, jak informovat a být informován. Následovat bude písemné shrnutí a další činnosti.",
    ],
  },
  {
    task: "Which of the following statements about full home-office working mode are true?",
    answerList: [
      "It's necessary to set up and keep regular meetings which are necessary to replace on-site communication.",
      "In messaging, we shouldn't send a group message which is relevant only to a single person.",
      "The risk that we don't find team members that are not satisfied with their work is higher when we work remotely.",
    ],
  },
  {
    task: "Které z následujících výroků týkajících se řízení očekávání nejsou pravdivá?",
    answerList: [],
  },
  {
    task: "Proces řízení očekávání všech zúčastněných stran musí být nastaven primárně na začátku projektu. Jakmile projekt začne, tento proces již není důležitý.",
    answer: false,
  },
  {
    task: "Seřaďte tři části řízení očekávání tak, jak na sebe navazují.",
    answerList: ["Set", "Monitor", "Influence"],
  },
  {
    task: "Budování důvěry, vzdělávání klienta, ospravedlnění a vysvětlení vašeho záměru (na základě zkušeností) jsou přístupy,  které musíte použít při _ očekávání.",
    answerList: ["řízení"],
  },
  {
    task: "Přiřaďte jednotlivé informační portály projektu k cílové skupině a jejich účelu.",
    answerList: [
      [
        "Team Level Portal",
        "všichni členové týmu a podřízené projekty, pokud existují",
        "organizační a komunikační struktura, novinky o projektu, případně informace o prostředích projektu,  standardy a konvence, plán projektu, odkaz na klíčové vstupy a výstupy projektu, finanční výsledky",
      ],
      [
        "Internal Project Board Level Portal",
        "interní management a vedení projektu",
        "hlavní body projektu a rizika, aktuální prioritní úkoly, další důležité milníky projektu, odkaz na klíčové vstupy a výstupy projektu,  finanční výsledky, klíčové kontaktní informace, plán projektu, odkaz na obchodní dokumenty (smlouva, konečná nabídka atd.), nejnovější zprávy o stavu",
      ],
      [
        "Customer Level Portal",
        "zákazník nebo externí uživatel (partner, subdodavatel)",
        "důležité informace, zprávy o stavu, výstupy projektu - včetně předávacích a akceptačních protokolů, vstupy projektu - např. důležité e-maily,  poskytnuté manuály s logem, komunikační schéma, další výkonné dokumenty (A4, plán projektu, zápisy z jednání), logické brány pro systémy třetích stran pro sledování problémů/chyb",
      ],
    ],
  },
  {
    task: "S jakými oblastmi v rámci procesu očekávání všech zúčastněných stran (SE) se můžete často setkat?",
    answerList: [
      "kvalita doručení",
      "kvantita",
      "termíny dodání",
      "management processes",
      "budget",
    ],
  },
  {
    task: "Jaký význam má Status Assessment (SA)?",
    answerList: [
      "SA poskytuje pravidelné hodnocení stavu všech činností v jednotce, včetně hodnocení podřízených jednotek.",
    ],
  },
  {
    task: "Jak často je vhodné provádět Status Assessment?",
    answerList: ["ideálně každý týden"],
  },
  {
    task: "Status Assessment slouží k informování o úspěchu projektu, a proto by do něj neměly být zahrnuty špatné zprávy.",
    answer: false,
  },
  {
    task: "Co znamená zkratka PBS?",
    answerList: ["Product Breakdown Structure"],
  },
  {
    task: "PBS obsahuje všechny výstupy/dodávky projektu a také vstupy, které jsou potřebné pro jejich vytvoření.",
    answer: true,
  },
  {
    task: "V rámci projektu vytváříme pouze dva typy výstupů – výstupy _, které jsou konečnými produkty nebo se používají k jejich vytváření, a výstupy _, které pomáhají zmírnit riziko projektu (obvykle výstupy pro správu).",
    answerList: ["věcné", "pokrývající rizika"],
  },
  {
    task: "What does creating Status Assessment mean?",
    answerList: [
      "To inform about current events and news in the unit.",
      "To assess the financial balance of the unit and alternatively balance of other resources in case they are important for the unit.",
      "To evaluate the state of important activities, the state of the subordinate organizational units (refer to their SA), etc. in terms of basic business processes and other evaluation metrics.",
      "To report on the progress of key tasks.",
    ],
  },
  {
    task: "Co je Product Breakdown Structure (PBS)?",
    answerList: ["PBS je nástroj pro konkrétní definici rozsahu projektu."],
  },
  {
    task: "II. Layer of Product Definition is considered to be:",
    answerList: ["Product Breakdown Structure (PBS)"],
  },
  {
    task: "Defining project products is an essential project management discipline. Defining project products is a critical success factor.",
    answer: true,
  },
  {
    task: "Which project management methodology uses the PBS as its standard tool?",
    answerList: ["PRINCE2"],
  },
  {
    task: "The PBS contains all project _, as well as any _ necessary to produce them.",
    answerList: ["products (deliverables)", "inputs"],
  },
  {
    task: "A project PBS must contain at least the deliverables defined by the contract (based, among other things, on your offer).",
    answer: true,
  },
  {
    task: "The PBS is prepared by the Project Manager and consulted with the following project management roles:",
    answerList: ["Business Architect", "Software Architect", "Test Architect"],
  },
  {
    task: "Each project must have its own _ to control all project activities. To build a plan, you have to know all _ you should produce and deliver (i.e. both material and risk-related ones).",
    answerList: ["project plan", "products"],
  },
  {
    task: "Which types of plans do we create for project management?",
    answerList: ["Schedule", "Project plan", "Capacity plan"],
  },
  {
    task: "Connect the plan types with their descriptions.",
    answerList: [
      [
        "Schedule",
        "A time view of a project at the milestone level. Sometimes, it is also referred to as the global project plan. Typically, it captures a project stage and sometimes even subsequent stages (high-level views).",
      ],
      [
        "Project Plan",
        "A detailed breakdown of activities and deliveries in time at the PBS level (i.e. by deliverable), including their distribution across iterations/increments. It may also capture the states in which select deliverables will be at a given time (draft / final version, etc.).",
      ],
      [
        "Capacity Plan",
        "An outline that is based on the project schedule along with available capacities. It contains the overview of workers allocated to the project over time (week by week) and information on resource usage to date.",
      ],
    ],
  },
  {
    task: "Which project role is primarily responsible for the creation and management of plans?",
    answerList: ["Project Manager"],
  },
  {
    task: "A critical path is determined by identifying the longest stretch of dependent activities and measuring the time required to complete them from start to finish.",
    answer: true,
  },
  {
    task: "Which statements about a project milestone are true?",
    answerList: [
      "Milestone is a critical point in time and life of a project.",
      "We differentiate between project milestones and contractual milestones.",
    ],
  },
  {
    task: "What is the main input for the preparation of QQ?",
    answerList: ["Product Breakdown Structure (PBS)"],
  },
  {
    task: "Which project role is primarily responsible for the creation and management of QQTB (PBC)?",
    answerList: ["Project Manager"],
  },
  {
    task: "What is QQTB?",
    answerList: ["Quantity, Quality, Time, Budget"],
  },
  {
    task: "What do we consider as a project cost?",
    answerList: [
      "Labour costs",
      "Travel costs",
      "Team building costs",
      "Hardware and licenses costs",
      "Target bonuses",
    ],
  },
  {
    task: "Relation among Quantity, Quality, Time, and Budget is that they are independent of each other.",
    answer: false,
  },
  {
    task: "Which areas of QQTB could be impacted by increasing scope (Quantity)?",
    answerList: ["Time", "Budget"],
  },
  {
    task: "For Steering Committee it is necessary to ensure the preparation of documents and presentations together with the client.",
    answer: true,
  },
  {
    task: "Jaké činnosti by měl každý projektový manažer vykonávat denně?",
    answerList: ["denní stand-up", "kontrola splněných úkolů"],
  },
  {
    task: "Propojte Burndown Charts s jejich popisy.",
    answerList: [
      [
        "Project Burndown Chart",
        "zobrazuje stav projektu z hlediska postupu prací a plnění plánu",
        "zobrazuje celý projekt",
      ],
      [
        "Sprint Burndown Chart",
        "zobrazuje průběh sprintu z hlediska zavírání úkolů",
        "zobrazuje jeden sprint",
      ],
    ],
  },
  {
    task: "The task represented by a single QQTB row _ assigned to exactly one responsible team member and should not take more than _.",
    answerList: ["is always", "one week"],
  },
  {
    task: "What should every team member briefly adress during daily stand-up?",
    answerList: [
      "What did he/she does since last stand-up.",
      "What will he/she does until next stand-up.",
    ],
  },
  {
    task: "What do we need to have to start the design phase?",
    answerList: [
      "scope from the contract",
      "A4, PBS",
      "team of business analysts/designers",
      "UC List / UCS classification KKTR",
      "know-how of the business domain",
    ],
  },
  {
    task: "To set up the design phase, we need to define what will be its outputs.",
    answer: true,
  },
  {
    task: "Besides the Project manager, which project roles are expected to be involved during the design phase?",
    answerList: [
      "Software Architect or at least Senior Developer",
      "Business Architect / Analyst",
      "Designer",
      "Test Architect",
    ],
  },
  {
    task: "The outputs of design have to be developable in given estimates.",
    answer: true,
  },
  {
    task: "What are the common tasks of the Project manager during the design phase?",
    answerList: [
      "communication with the client",
      "organization of business meetings between team and product owners",
      "internal and external status reporting of the progress",
      "control the scope in terms of contract (with BA and SWA)",
    ],
  },
  {
    task: "What are the most common problems of the design phase?",
    answerList: [
      "The team has a lack of business domain knowledge.",
      "The design of the functionality is more complicated than expected.",
      "There can be errors or inconsistencies in the specification of the business process. It results in the redesign and reopening of some already closed specifications.",
      "Some third-party inputs are missing or will be delivered later than planned.",
      "The revision process stacks and spins around with never-ending comments.",
    ],
  },
  {
    task: "What are the most common problems of the development phase?",
    answerList: [
      "Not sufficient technical knowledge, like new or unknown areas for the project team",
      "Development environment is not ready on time",
      "The business solution is too complicated, and it is hard to find a development solution within budget",
      "Not sufficient code quality",
    ],
  },
  {
    task: "What do we need to have to start the development phase?",
    answerList: [
      "closed and approved design",
      "KKTR",
      "team of developers",
      "knowledge of used technology",
      "prepared environment and development tools",
    ],
  },
  {
    task: "The Project manager should set up the code revision process, prepare developers guidelines, define configuration management and other important topics for the development phase of each IT project.",
    answer: false,
  },
  {
    task: "Connect the project roles with their scope of work during the development phase.",
    answerList: [
      ["Project manager", "managing the project"],
      [
        "Business Architect / Analyst",
        "consulting to developers, solving inconsistency problems and bugs in the specification, possibly working on the scope of the next phases",
      ],
      ["Developer", "working on development tasks"],
      ["Tester", "preparing the test scenarios according to specifications"],
    ],
  },
  {
    task: "In general, the Project manager _ know the Git Flow and access Git. However, the knowledge of the Git Flow and Git active monitoring _ him or her to manage the project better.",
    answerList: ["does not have to", "helps"],
  },
  {
    task: "What are the common tasks of the Project manager during the development phase?",
    answerList: [
      "communication with the client",
      "organization of meetings to solve technological issues",
      "internal and external status reporting of the progress",
      "controlling the hours consumed by developers",
      "management and working with risks",
    ],
  },
  {
    task: "Usually, our applications are using data from/to other applications and online interfaces to other systems. On top of that, different parts of the applications are frequently developed in different teams. This results in increased complexity of the development. In this relation, any issue usually means some reworks and can have a serious impact on time and budget.",
    answer: true,
  },
  {
    task: "Connect the project roles with their scope of work during the testing phase.",
    answerList: [
      ["Project manager", "Management of the project."],
      [
        "Test Architect",
        "Preparation of the test strategy/test approach (internal and external), ensuring that the test team (which is his responsibility) has everything they need (environments, data, notebooks, etc.).",
      ],
      [
        "SWA and developers",
        "Primary bug fixing and consultation in bug analysis, help with application system logs, etc.",
      ],
      ["Tester", "Test execution, bug reporting, test scenarios creation."],
      [
        "BA and designers",
        "For the consultation of bugs and correct state, fix the bugs in the specification.",
      ],
    ],
  },
  {
    task: "We always need to test our applications because there is no such thing as bugless software.",
    answer: true,
  },
  {
    task: "What do we need to have to start the testing phase?",
    answerList: [
      "Test strategy.",
      "Agreed acceptance criteria (entry and exit).",
      "Closed business specification.",
      "Application or at least some part of it.",
      "List of use cases and test estimates.",
    ],
  },
  {
    task: "Sort the testing phases by how they follow each other.",
    answerList: [
      "Development testing phase",
      "FAT phase",
      "UAT phase",
      "SIT phase",
      "Pre-Production testing phase",
    ],
  },
  {
    task: "Which are the common testing types?",
    answerList: [
      "Development testing.",
      "Factory Acceptance Testing (FAT).",
      "User Acceptance Testing (UAT).",
      "Performance testing.",
    ],
  },
  {
    task: "What can we take into account when creating testing estimates?",
    answerList: [
      "The amount of time we have for testing.",
      "The capacity of the testing team.",
      "Testing types and activities that we need to cover.",
      "The amount of hours for design and implementation.",
      "Previous experiences with similar projects and tests.",
    ],
  },
  {
    task: "Connect the project roles with their scope of work during the testing phase.",
    answerList: [
      ["Project manager", "Management of the project."],
      [
        "Test Architect",
        "Preparation of the test strategy/test approach (internal and external), ensuring that the test team (which is his responsibility) has everything they need (environments, data, notebooks, etc.).",
      ],
      [
        "SWA and developers",
        "Primary bug fixing and consultation in bug analysis, help with application system logs, etc.",
      ],
      ["Tester", "Test execution, bug reporting, test scenarios creation."],
      [
        "BA and designers",
        "For the consultation of bugs and correct state, fix the bugs in the specification.",
      ],
    ],
  },
  {
    task: "What are the main tasks and responsibilities of a Project manager during the testing phase?",
    answerList: [
      "With Test architect responsible for Test strategy to cover all the scope for testing.",
      "Responsibility for the budget (hours) and integrity of the estimates.",
      "Assessment and escalation of requirements from the customer which are unrealistic.",
      "Managing and working with risks - maintaining the Risk list.",
      "Communication with client / business owner to discuss complicated issues, organize 'Bug meetings' to clean up 'unsolvable' errors, and prioritize the others.",
    ],
  },
  {
    task: "The pitfall of testing is that it is dependent on all other project disciplines. It results in causality that if any of the other project disciplines are not doing well, testing will always suffer from it.",
    answer: true,
  },
  {
    task: "The budget is usually prepared in three phases. Assign the detail of the estimate to the phase and relevant examples of the estimation.",
    answerList: [
      [
        "Hourly estimate per module",
        "First phase",
        "Module 1 = 1 000 person-hours, Module 2 = 1 500 person-hours",
      ],
      [
        "Hourly estimate per Use Case",
        "Second phase",
        "Use Case 1 = 400 person-hours, Use Case 2 = 300 person-hours",
      ],
      [
        "Hourly estimate per UAF element",
        "Third phase",
        "Command 1 = 40 person-hours, Route 1 = 16 person-hours",
      ],
    ],
  },
  {
    task: "For the realization budget is responsible _, and for its creation is responsible _.",
    answerList: ["Production Manager", "Project Manager"],
  },
  {
    task: "A budget for the stabilization phase should be determined at the beginning of the project at the latest.",
    answer: true,
  },
  {
    task: "Realization budget involves the following parts:",
    answerList: [
      "development effort",
      "other project costs (for IDE licenses, workplaces, environments, etc.)",
      "product licenses",
      "takeover to maintenance",
    ],
  },
  {
    task: "In the preparation of realization budget can participate more organization units.",
    answer: true,
  },
  {
    task: "Thanks to UAF, we can (re)use already existing products. In this connection, select what we should consider when creating a project budget.",
    answerList: [
      "products license fees",
      "products integration effort",
      "products extension effort",
    ],
  },
  {
    task: "A production contract is an agreement between _ and _ units. The production contract _ concluded between these units.",
    answerList: ["Sales", "Production", "must always be"],
  },
  {
    task: "For the preparation of PBC (Project Business Case), the necessary inputs are PBS and QQ.",
    answer: true,
  },
  {
    task: "The project budget consists of:",
    answerList: [
      "Financial summary",
      "Budget and Productivity",
      "Costs, Revenues",
      "Target Bonuses",
      "Assessment, Closing Up",
    ],
  },
  {
    task: "The project budget should include Revenues that are about the planning of all costs on a project for the defined time.",
    answer: false,
  },
  {
    task: "Která z následujících tvrzení o řízení rizik jsou pravdivá?",
    answerList: [
      "The risk list is prepared during the start-up of the project and is updated during the whole project.",
      "An alternative scenario should be prepared for at least all risks from the Risk list.",
      "Throughout the project, we gradually reduce or even completely eliminate risks.",
    ],
  },
  {
    task: "V rámci řízení očekávání klienta je nutné pravidelně informovat všechny zainteresované role o aktuálním stavu, očekávaném cílovém stavu a možných posunech.",
    answer: true,
  },
  {
    task: "Project risks have to be always influenceable.",
    answer: false,
  },
  {
    task: "Which of the following information may contain Risk list?",
    answerList: [
      "name",
      "description",
      "likelihood",
      "risk level",
      "risk treatment",
    ],
  },
  {
    task: "Sort the parts of the Risk Life-Cycle in the proper order.",
    answerList: [
      "Identification",
      "Analysis",
      "Mitigation",
      "Assessment",
      "Risk Response Activation",
    ],
  },
  {
    task: "Which of the following options are good examples of the areas of customer expectations?",
    answerList: [
      "Scope and quality of the delivery",
      "Budget",
      "Delivery terms",
      "Management processes and reporting",
      "Final solution proposal",
    ],
  },
  {
    task: "Who is responsible for the management of the customer's expectations?",
    answerList: ["Project Manager"],
  },
  {
    task: "Customer cooperation should be specified in the proposal or final agreement. That is mainly because without needed cooperation from the customer, project terms and budget are impacted.",
    answer: true,
  },
  {
    task: "Which of the following options are good to involve the customer in the IS development?",
    answerList: [
      "Organization of regular status assessments.",
      "Open and transparent reporting.",
      "Continuous presentation of the outputs.",
      "The Project Manager tries to make sure that the client understands the project factually and the processes.",
    ],
  },
  {
    task: "Jak by mělo vypadat strukturované řešení problémů?",
    answerList: [
      "identifikace a pojmenování",
      "analýza",
      "popis možných variant řešení",
      "eskalace",
      "zvolit správný typ řešení",
    ],
  },
  {
    task: "Artefakt _ je vytvořen tak, aby řídil proces řešení problému od jeho identifikace až po výběr řešení, které problém vyřeší.  Artefakt analyzuje problém, popisuje varianty vedoucí k jeho řešení a definuje vybranou možnost.  Skutečné řešení je poté spravováno Klíčovým úkolem (KT) nebo jiným nástrojem pro řízení.",
    answerList: ["Problem Resolution"],
  },
  {
    task: "Každý problém je třeba posoudit z hlediska jeho závažnosti a _.",
    answerList: ["složitosti"],
  },
  {
    task: "Co vše se týká procesu řešení problémů?",
    answerList: [
      "Cílem je řešit vzniklé problémy.",
      "Řešení a jejich hodnocení řídíme pomocí Klíčového úkolu (Key Task) nebo jiného nástroje pro řízení.",
    ],
  },
  {
    task: "Pokud potřebujeme problém rychle vyřešit, použijeme rychlá (alternativní) řešení, tzv. „workaround“, které problém dočasně zmírní.",
    answer: true,
  },
  {
    task: "Která z následujících tvrzení o krizi na projektu jsou pravdivá?",
    answerList: [
      "Správné řízení projektů a pravidelné reportování mohou snížit dopady a krátké trvání krize.",
      "Krize je stav projektu, ve kterém se projekt odchyluje (nebo se s vysokou pravděpodobností odchýlí)  od plánovaných parametrů a cílů projektu (obvykle od KKTR nebo očekávání klienta).",
      "Krizi může způsobit špatně řízená očekávání klienta.",
    ],
  },
  {
    task: "Co je cílem krizového řízení?",
    answerList: [
      "Překlenout období, kdy došlo k odchylce mezi definovanými parametry a skutečným stavem, a vrátit rovnováhu.",
      "Zmírnit dopad krize a minimalizovat dobu trvání krize.",
    ],
  },
  {
    task: "Které z následujících tvrzení o reportování během krize není pravdivé?",
    answerList: [
      "Četnost reportování v době krize je jednou za týden nebo dva.",
    ],
  },
  {
    task: "Která z následujících tvrzení/pouček pro řešení problémů jsou pravdivá?",
    answerList: [
      "Standardizujte přístup a řešení opakujících se nestandardních problémů.",
      "Neztrácejte hlavu.",
      "Problémy, které jsou závažné a obtížně řešitelné, jsou velmi nebezpečné.",
    ],
  },
  {
    task: "What are the common causes of a crisis on the project?",
    answerList: [
      "Unreal QSTB.",
      "Wrongly managed client's expectations.",
      "Not properly staffed team.",
      "Bad decisions.",
    ],
  },
  {
    task: "What three basic attributes do we need to ensure that information is secure (we also call it a Security Triad)?",
    answerList: ["Confidentiality", "Integrity", "Availability"],
  },
  {
    task: "Why is a Security Card for a project or product important?",
    answerList: [
      "Provides demonstrable familiarity with the safety requirements of all collaborators working on a project or product.",
      "It is a single place where all relevant safety information requirements, information or measures are stored.",
      "You can use the Security Card to better manage information security projects and activities.",
    ],
  },
  {
    task: "What does the SSDLC (Secure Software Development Life Cycle) methodology bring?",
    answerList: [
      "Better and safer products and software.",
      "Identification of security risks and issues from the beginning of development.",
      "Save costs on error correction.",
      "Improving awareness of information security and secure development.",
    ],
  },
  {
    task: "Individual SSDLC requirements are tied to _.",
    answerList: ["the classification and riskiness of the project"],
  },
  {
    task: "Who is responsible for filling in the Security Card?",
    answerList: ["Project Manager", "Team Leader", "Product Manager"],
  },
  {
    task: "When to report an information security incident?",
    answerList: ["Whenever it is suspected or occurred."],
  },
  {
    task: "Sort the parts of the change life cycle in proper order.",
    answerList: [
      "Recorded",
      "Evaluated",
      "Authorized and prioritized",
      "Planned",
      "Documented, reviewed, implemented, and tested",
    ],
  },
  {
    task: "Into which of the following areas can a project change have an impact?",
    answerList: [
      "Scope of the delivery",
      "Non-functional requirements",
      "Timeline",
      "Deployment",
      "People",
    ],
  },
  {
    task: "What are the common origins of changes on the projects?",
    answerList: [
      "Evolution of the requirements in time.",
      "Unfulfilled expectations.",
      "Different understanding of requirements.",
      "Changes in workforce.",
    ],
  },
  {
    task: "All changes must be agreed upon by all relevant parties and captured in the change catalog that is regularly reported. The form of the change catalog is agreed upon at the beginning of the project (artifact, ticket tracking system, etc.).",
    answer: true,
  },
  {
    task: "Who usually participates in project change estimation?",
    answerList: [
      "Project Manager",
      "Software Architect",
      "Business Architect",
      "Test Architect",
    ],
  },
  {
    task: "Co je výstupem akceptačního řízení?",
    answerList: ["podepsaný akceptační protokol"],
  },
  {
    task: "Akceptace je rozdělena do dvou procesů - <UU5.Bricks.Strong>Sestavení akceptačních kritérií</UU5.Bricks.Strong> na začátku projektu a <UU5.Bricks.Strong>Akceptační řízení</UU5.Bricks.Strong>, které by mělo být použito k vyhodnocení, zda poskytnutý výstup splňuje schválená akceptační kritéria.",
    answer: true,
  },
  {
    task: "Které tvrzení o sestavování akceptačních kritérií jsou pravdivá?",
    answerList: [
      "Akceptační kritéria jsou stanovena na začátku každého projektu.",
      "Musí být jednoznačně specifikovány.",
      "Akceptační kritéria závisí na práci/službě, kterou dodáváte, a na vaší smlouvě s klientem.",
      "Akceptační kritéria jsou jiná pro informační systém a jiná pro technický projekt.",
    ],
  },
  {
    task: "Součástí akceptačního řízení jsou vždy Uživatelské akceptační testy (UAT).",
    answer: true,
  },
  {
    task: "_ snižuje riziko nepřijetí celé dodávky.  Používá se pro výstupy projektu vytvořené v jeho průběhu, jako jsou moduly informačního systému, dokumenty nebo dokonce některé kapitoly dokumentů.",
    answerList: ["Průběžná akceptace"],
  },
  {
    task: "Akceptační kritéria reflektují kategorie požadavků podle metodiky FURPS +. Přiřaďte, co každá kategorie znamená.",
    answerList: [
      [
        "Functionality",
        "určujeme, zda jsou poskytovány funkčnosti specifikované v Technickém projektu",
      ],
      [
        "Usability",
        "we determine whether the user interface (GUI) matches to the graphic manual, quality of online help, training materials and documentation",
      ],
      [
        "Reliability",
        "zaměřuje se na výsledky testů (testování integrity, testování struktury, zátěžové testování)",
      ],
      [
        "Performance",
        "zaměřuje se na výsledky testů - Performance profile, Contention testy, Load testy and Benchmark testy",
      ],
      [
        "Supportability",
        "zaměřuje se na výsledky konfiguračních a instalačních testů",
      ],
    ],
  },
  {
    task: "What types of acceptance do we have on projects?",
    answerList: [
      "Continuous acceptance",
      "Acceptance with reservations",
      "Final acceptance",
    ],
  },
  {
    task: "Kdo je zodpovědný za Uživatelské akceptační testy (UAT)?",
    answerList: ["zákazník"],
  },
  {
    task: "Jaké jsou vstupy do UAT?",
    answerList: [
      "testovací scénáře a data",
      "informační systém",
      "podpora realizačního týmu dodavatele",
      "testovací tým zákazníka",
    ],
  },
  {
    task: "Před zahájením Uživatelských akceptačních testů je třeba provést řadu přípravných kroků. To zahrnuje zejména přípravu testovacího prostředí, uživatelské scénáře, testovací data, nástroje, školení atd. Tyto přípravné kroky probíhají _.",
    answerList: ["na straně zákazníka"],
  },
  {
    task: "K převzetí projektu z vývoje do servisu může dojít i před akceptací vývojového projektu.",
    answer: false,
  },
  {
    task: "Převzetí know-how projektu z vývoje do servisu lze provést třemi způsoby. Co proběhne ještě před převzetím projektu?",
    answerList: [
      "zapojení pracovníků servisu do vývojového týmu",
      "zaučení vývojem",
    ],
  },
  {
    task: "What are the integral questions in connection with the planning of UAT?",
    answerList: [
      "WHAT is the goal, and what will be tested?",
      "HOW exactly will the system be tested?",
      "WHO will be responsible, who will participate, who will be a support role?",
      "WHEN UAT starts?",
    ],
  },
  {
    task: "Which of the following parts should be included in Takeover Protocol?",
    answerList: [
      "Formal particulars.",
      "The assistance of know-how takeover.",
      "Impacts on existing service.",
      "Deployment to live environment, stabilization.",
      "Reservations list and Reservations resolution plan.",
    ],
  },
  {
    task: "In which ways can a project be closed?",
    answerList: ["Planned closure or Premature closure"],
  },
  {
    task: "The only prerequisite of Project Final Assessment is that deliverables are <UU5.Bricks.Strong>delivered</UU5.Bricks.Strong> and <UU5.Bricks.Strong>accepted</UU5.Bricks.Strong>.",
    answer: false,
  },
  {
    task: "Which steps include the Project Evaluation & Closure?",
    answerList: [
      "Business Case evaluation",
      "Return of licenses",
      "Termination of test environments/servers (in case they are not passed to the maintenance)",
      "Creation of people assessment",
      "Compilation of Lessons learned",
    ],
  },
  {
    task: "What is the purpose of the uuAppServer?",
    answerList: [
      "To provide a standardized way to design and develop API.",
      "Unification of technology used for server-side in uuApps.",
      "To provide a standardized way to solve common server features.",
    ],
  },
  {
    task: "What is unified by the uuAppServer?",
    answerList: [
      "The way we design and develop API.",
      "How common server features are handled.",
      "The development environment.",
    ],
  },
  {
    task: "Is it possible to easily create a user interface for the uuAppServer?",
    answerList: [
      "Yes, the most efficient way is using the uu5 product in the uuApp Framework, which provides a means to easily create a user interface and a nice frontend for the uuAppServer.",
    ],
  },
  {
    task: "Is it complicated to deploy the uuAppServer in the cloud?",
    answerList: [
      "No, in the uuApp Framework, the cloud environment is managed by the uuCloud. Thanks to the synergy between products of the uuApp Framework and the toolset provided by the uuAppServer, anyone can easily make the deployment in the cloud.",
    ],
  },
  {
    task: "The uuAppServer provides common _ features (like authorization and validation of inputs), so _ don't have to deal with them while creating uuApps. Instead, they can focus on implementation of API and _.",
    answerList: ["server", "developers", "business logic"],
  },
  {
    task: "Does the uuAppServer provide means of user Authorization?",
    answerList: [
      "Yes, either directly by the uuAppServer or based on the organizational structure in the uuBusinessTerritory.",
    ],
  },
  {
    task: "What is an application server?",
    answerList: ["Server designed to run applications."],
  },
  {
    task: "The Architecture helps us, because in project development we need to handle a lot of _ features,  which we do not want to develop in every project all over again.",
    answerList: ["common"],
  },
  {
    task: "Can you use uuAppServer in cloud?",
    answer: true,
  },
  {
    task: "If the same uuApp was implemented in two programming languages, would its API be different?",
    answer: false,
  },
  {
    task: "Is there any advantage in having the uuAppServer in NodeJS and the user interface in uu5?",
    answerList: ["Yes, both use the same programming language."],
  },
  {
    task: "In microservice architecture an application is built _.",
    answerList: ["as a collection of loosely coupled services"],
  },
  {
    task: "How can you effectively create an application that needs to provide quick response to users but also do demanding calculations at the same time?",
    answerList: [
      "Split it into two services which are not affecting each other and can be scaled according to current needs.",
    ],
  },
  {
    task: "Can a uuApp be composed of microservices in two different programming languages?",
    answerList: ["Yes, because they communicate through their API."],
  },
  {
    task: "The uuAppServer is technology _ and its API is _ in every programming language in which it is implemented.",
    answerList: ["independent", "the same"],
  },
  {
    task: "What are the benefits of using the uuAppServer?",
    answerList: [
      "It saves time and resources.",
      "Developers can focus on API and business logic instead of writing common server features.",
      "It comes in synergy with products for the development of a human interface and deployment to the cloud.",
    ],
  },
  {
    task: "Is it hard for a uuApp developer to switch from developing one uuApp to another?",
    answerList: [
      "No, as both are developed using the uuApp Framework, which means that the same principles, approach and patterns are used.",
    ],
  },
  {
    task: "Which parts of uuCmd define the API of a uuApp?",
    answerList: [
      "Endpoint (url at which the uuCmd is available).",
      "DtoIn and its validation.",
      "DtoOut and uuAppErrorMap.",
    ],
  },
  {
    task: "What are the advantages in having the way we create DtoIn and DtoOut defined by the uuAppServer?",
    answerList: [
      "The definition of API is unified for all uuApps.",
      "The design of every uuCmd in every uuApp has inputs and outputs defined in a unified fashion.",
      "If uuCmd response contains an error, then its code, message and attributes are clear and defined in a same way in every application.",
    ],
  },
  {
    task: "Can you define who is authorized to call a uuCmd?",
    answerList: [
      "Yes, you define uuAppProfiles (such as Authorities) and assign them to uuCmds. These profiles can then be assigned to users.",
    ],
  },
  {
    task: "What is true about the uuAppServer and human interface?",
    answerList: [
      "Human interface for uuAppServer may be created in any technology, but the most efficient way to create it is using the uu5 product which is optimized for use with the uuAppServer.",
    ],
  },
  {
    task: "What is the most efficient way to create a new uuApp project with the uuAppServer?",
    answerList: [
      "Running the <UU5.Bricks.Em>create-uuapp</UU5.Bricks.Em> task provided by the uuAppDevKit, which automatically creates the uuApp according to the latest patterns.",
    ],
  },
  {
    task: "Does the uuAppServer provide a toolset to facilitate the development?",
    answer: true,
  },
  {
    task: "The deployment of a uuApp to the uuCloud requires _ knowledge of cloud environment and _ who is authorized can do it using the uuAppDevKit toolset.",
    answerList: ["no special", "every developer"],
  },
  {
    task: "When should a uuApp be deployed to the uuCloud during the development?",
    answerList: ["Any day, starting on the first day of the development."],
  },
  {
    task: "Does the deployment of a uuApp to Azure, Amazon or OnPremise environment require a different approach and knowledge from developers?",
    answerList: [
      "No, because the developer deploys it using the standardized uuAppDevKit and uuCloud interface which encapsulates the technology of the specific environment.",
    ],
  },
  {
    task: "Can one uuAppWorkspace access the data of another one?",
    answerList: [
      "Yes, but only through API provided by the uuApp. Direct access to data in the same database is not possible.",
    ],
  },
  {
    task: "What is true about multitenancy in the uuAppServer?",
    answerList: [
      "It is a standard part of the uuAppServer product.",
      "It saves resources.",
      "uuAppWorkspaces may share a database, but are independent of each other and their data are isolated.",
      "Users work with the uuAppWorkspace as if it was the application itself.",
    ],
  },
  {
    task: "Match the data types to the appropriate data storage.",
    answerList: [
      [
        "uuAppObjectStore",
        "Structured object",
        "JSON object containing name/value pairs",
      ],
      ["uuAppBinaryStore", "Binary object", "Image"],
    ],
  },
  {
    task: "If two or more uuApps have some functionality in common, in what way should it be implemented?",
    answerList: [
      "The reusable parts should be in a standalone library that may be used by any uuApp.",
    ],
  },
  {
    task: "Can uuApps created with the uuAppServer use zero-downtime deployment and be deployed without outages?",
    answer: true,
  },
  {
    task: "Is it possible to scale the resources of uuApps deployed in the uuCloud based on their operational needs?",
    answerList: [
      "Yes, the uuAppServer is stateless and the uuCloud supports elastic scaling.",
    ],
  },
  {
    task: "What can audit-log records be used for?",
    answerList: [
      "For security audits of who did what in an application.",
      "For calculating statistics on how many uuCmds are called.",
    ],
  },
  {
    task: "Is the uuAppServer in compliance with OWASP Application Security Verification Standard (ASVS)?",
    answer: true,
  },
  {
    task: "Is high availability supported by the uuAppServer and uuCloud?",
    answerList: [
      "Yes, uuApps can be deployed to two or even more nodes and be available should one of them fail.",
    ],
  },
  {
    task: "Does the uuAppServer support logging of application errors?",
    answerList: ["Yes, it is a standard feature of the uuAppServer."],
  },
  {
    task: "_ verifies that the users executing use-cases are who they say to be, while _ gives these users permission to call them.",
    answerList: ["Authentication", "Authorization"],
  },
  {
    task: "Can you log events from application logic into audit log?",
    answerList: [
      "Yes, you can explicitly create an audit log record from application logic.",
    ],
  },
  {
    task: "What is the relation between an API and a uuCmd?",
    answerList: ["The API of a uuApp is defined by uuCmds."],
  },
  {
    task: "What needs to be specified for each uuCmd?",
    answerList: [
      "Input (dtoIn).",
      "Output (dtoOut).",
      "Business Logic.",
      "How the uuCmd can be called (Endpoint).",
      "Who is authorized to call the uuCmd (uuAppProfiles).",
    ],
  },
  {
    task: "Is the way of informing about errors in uuCmds standardized?",
    answerList: [
      "Yes, every uuCmds must include uuAppErrorMap in its response.",
    ],
  },
  {
    task: "The _ uuCmd is executed immediately and the user waits for the result, while the _ uuCmd runs in the background and can take a while to be processed.",
    answerList: ["synchronous", "asynchronous"],
  },
  {
    task: "Match uuCmd parts with their descriptions.",
    answerList: [
      ["DtoIn", "Input of a uuCmd."],
      ["DtoOut", "Output of a uuCmd."],
      ["Business Logic", "What the uuCmd does."],
      ["Validation schema", "Defines the structure of dtoIn."],
      [
        "uuAppErrorMap",
        "Standardized object for returning errors from uuCmds.",
      ],
    ],
  },
  {
    task: "What must be defined in documentation of each uuCmd in the application model?",
    answerList: [
      "Which uuAppProfiles are authorized to call the uuCmd and how it can be called.",
      "What the expected input and output are.",
      "What its business logic is.",
    ],
  },
  {
    task: "Do we need to validate the input of a uuCmd on server?",
    answerList: [
      "Yes, it is necessary to define the expected input and validate it on application server for each invoked uuCmd.",
    ],
  },
  {
    task: "uuCmds defined in _  are assigned to uuAppProfiles which can be assigned to specific users within _.",
    answerList: ["uuApps", "uuAppWorkspaces"],
  },
  {
    task: "How is the need for the same functionality in all uuApps handled by the uuApp Framework?",
    answerList: [
      "The solution is standardized, documented, and integrated into uuApp Framework products.",
    ],
  },
  {
    task: "Can you check whether your application or product is in compliance with development standards, security, operation capabilities and serviceability?",
    answerList: [
      "Yes, by submitting it to certification by the uuApp Framework Evangelists.",
    ],
  },
  {
    task: "Is there a difference between the deployment of NodeJS and Java applications to the uuCloud using the uuAppDevKit?",
    answerList: [
      "No, the uuAppDevKit provides the 'deploy' task which is configured and executed in the same way.",
    ],
  },
  {
    task: "What is a correct approach if a project requires some changes in the way the uuAppServer works?",
    answerList: [
      "The project sends a request to the uuAppServer product. The requested feature is evaluated and if it is considered beneficial as a standard feature of the uuAppServer it is incorporated into the product roadmap and implemented.",
      "The project team implements the requested feature in cooperation with the product team in a way that it can be easily integrated into the product and made a standard feature of the uuAppServer.",
    ],
  },
  {
    task: "What is the purpose of uu5?",
    answerList: [
      "To simplify development of responsive applications that are able to adapt their user interface to any device.",
      "To make beautiful and easy to use uuApps.",
    ],
  },
  {
    task: "What does <UU5.Bricks.Strong>Mobile First</UU5.Bricks.Strong> mean?",
    answerList: [
      "An approach to design human interface of applications. First, it is designed to provide excellent user experience on mobile devices. It is adjusted for all the other devices (tablets, desktops etc.) later.",
    ],
  },
  {
    task: "Connect technology and its purpose:",
    answerList: [
      ["HTML", "Creating of the web page structure and content."],
      ["JavaScript", "Adding dynamic elements and functionalities."],
      ["React", "Creating and rendering components."],
      ["uuGDS", "Design system for the human interface."],
    ],
  },
  {
    task: "Could you use another React components and libraries in uu5?",
    answer: true,
  },
  {
    task: "What does the uu5 toolbox contain?",
    answerList: [
      "Well-documented Components",
      "Concepts, guidelines and examples",
      "Online courses and trainings",
      "Support teams",
      "Tools for design, development, testing and deployment",
    ],
  },
  {
    task: "Which device can you use to open an application developed in uu5?",
    answerList: ["Mobile phone", "Tablet", "TV", "Laptop"],
  },
  {
    task: "Is the <UU5.Bricks.Link target='_blank' href='https://unicorn.com'>unicorn.com</UU5.Bricks.Link> website using uu5?",
    answer: true,
  },
  {
    task: "Is uuCourseKit (that you are using right now) using uu5?",
    answer: true,
  },
  {
    task: "When is a library loaded by dynamic component loading?",
    answerList: [
      "When a component from a library is rendered for the first time (if the library has not been downloaded yet).",
    ],
  },
  {
    task: "Is it possible to display the <b>same application</b> (in uu5) on both a mobile phone and TV?",
    answer: true,
  },
  {
    task: "Where can you find applications created by uu5?",
    answerList: ["App Store", "Web Browser", "Google Play"],
  },
  {
    task: "Is it possible to use components from different libraries on one page?",
    answerList: [
      "Yes, they will be displayed in visual harmony thanks to uuGds.",
    ],
  },
  {
    task: "Which of the statements are true?",
    answerList: [
      "uu5 uses uuGds, which defines one standard style for all of components.",
      "Components from different libraries look great together in one page.",
    ],
  },
  {
    task: "Do uu5 Components use Mobile First approach?",
    answer: true,
  },
  {
    task: "Where can a user create his own content with components?",
    answerList: [
      "In all uuApps that support editable content.",
      "In a page/component where the user has the rights to edit content.",
    ],
  },
  {
    task: "Is it necessary for uuApp to know which components will be inserted in its editable content?",
    answer: false,
  },
  {
    task: "If your uuApp has a web user interface and native applications for iOS and Android, how many times do you have to develop it?",
    answerList: [
      "Only once – exactly the same code runs on all devices, in all browsers and even as native mobile app.",
    ],
  },
  {
    task: "Can a user change the language of a uuApp?",
    answerList: ["Yes, the content is changed without a reload of the page."],
  },
  {
    task: "What are the advantages of uu5 when working with the user identity?",
    answerList: [
      "It can recognize if the user is logged in or not.",
      "There can be different content displayed for an authenticated and non-authenticated user.",
      "The uu5 allows to create components for logging in and logging out.",
    ],
  },
  {
    task: "How does uu5 support i18n (internationalization)?",
    answerList: [
      "It solves time zones.",
      "It solves the date/time/number format.",
      "It solves multilingual user interface.",
      "It solves inserting of multilingual content.",
    ],
  },
  {
    task: "How does uu5 solve user data input?",
    answerList: [
      "uu5 contains form components for simple user data input.",
      "uu5 contains Form component that makes multiple input composition easy.",
      "uu5 validates the correct format of the user input data.",
    ],
  },
  {
    task: "Why does uu5 encourage SPA (Single Page Application)?",
    answerList: [
      "SPA uses the computation power of the user's device and loads just data from the server for each page.",
      "SPA does not load a HTML file for each page.",
    ],
  },
  {
    task: "How does uu5 solve error handling?",
    answerList: [
      "Multilingual error messages.",
      "Sending logs to the server.",
      "Components for error catching.",
      "Components for displaying messages.",
    ],
  },
  {
    task: "Try to join library with its purpose.",
    answerList: [
      ["uu5Chart", "Various charts for displaying large data sets."],
      [
        "uu5Tiles",
        "Large data displayed responsively by tiles or table with filtering, sorting and bulk actions.",
      ],
      ["uu5Forms", "Inputs and forms for getting information from user."],
      ["uu5Imaging", "Image input, display and manipulation."],
      ["uu5Calendar", "Calendar display and manipulation components."],
    ],
  },
  {
    task: "Does uu5 contain support for server communication?",
    answer: true,
  },
  {
    task: "Is uu5 suitable for manipulation with large data sets?",
    answerList: ["Yes, there are specialized uu5 libraries that make it easy."],
  },
  {
    task: "What are the main advantages of using uu5 components?",
    answerList: [
      "They work in all major browsers on different operating systems.",
      "They are responsive and support showing different content on different screen sizes.",
      "They support multilingual content.",
      "They can communicate with another uu5 components.",
      "They have unified visual style and settings.",
    ],
  },
  {
    task: "Which of the following statements are true for uu5 components?",
    answerList: [
      "Each uu5 component is reusable.",
      "Non-visual components take care of communication with the server.",
      "uu5 component can be composed from another uu5 components.",
    ],
  },
  {
    task: "What is the difference between props and context?",
    answerList: [
      ["Props", "They are set directly to a component when you use it."],
      [
        "Context",
        "Some of parent component sets it and the component in a child structure reads it itself.",
      ],
    ],
  },
  {
    task: "What forces a component to re-render?",
    answerList: ["Props change", "Context change", "State change"],
  },
  {
    task: "What can a component be used for?",
    answerList: [
      "For creating web pages",
      "For creating book contents",
      "For loading server data",
      "For displaying data",
      "For getting data from the users through inputs",
    ],
  },
  {
    task: "Is it possible to put component from one uuApp to the content of another uuApp?",
    answerList: ["Yes, component will load data from its 'home' uuApp."],
  },
  {
    task: "Is it possible to test uu5 Component locally?",
    answerList: ["Yes, it is simple thanks to uuDevKit tasks."],
  },
  {
    task: "What does a developer have to do to publish uu5 Components?",
    answerList: ["Just run a task and components are in production."],
  },
  {
    task: "What does the uu5 documentation contain?",
    answerList: [
      "Get Started",
      "Examples",
      "API Documentation",
      "Online Courses",
    ],
  },
  {
    task: "What should you get familiar with before start of development of your first component?",
    answerList: [
      "Javascript",
      "HTML",
      "Cascade Style Sheets (CSS)",
      "uuApp Framework key principles",
    ],
  },
  {
    task: "Can a non-developer use uu5 components?",
    answerList: [
      "Yes, anyone can use visual editor to compose components in uuApps like uuBookKit, uuWebKit, uuDocKit. More, if they understand the uu5string html-like syntax, they can edit the content source online to get all features.",
    ],
  },
];
