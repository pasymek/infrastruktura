D_EXTEND('zhp.pl',
    TXT('_github-challenge-bialostockazhp.bialostocka', '871ae7c463'),
    Ms365_Subdomain('bialostocka', 'zhp.pl'),
    Delegation_A('bialostocka', '195.78.66.229'),
    TXT('bialostocka', 'ba1e000553a22b599a4d23b7a25b34a12c2b43dec2707ec0bd4b0a58fb2126a'), //weryfikacja do SSL

    Ms365_Subdomain('augustow', 'zhp.pl'),  // MS365-16444
    Delegation_A('augustow', '195.78.66.229'),

    CNAME('*.bielskpodlaski', 'bielskpodlaski.zhp.pl.'),
    A('bielskpodlaski', '79.96.169.242'),

    CNAME('*.grajewo', 'grajewo.zhp.pl.'),
    A('grajewo', '79.96.169.242'),

    CNAME('*.suwalki', 'suwalki.zhp.pl.'),
    A('suwalki', '79.96.169.242'),

    // stara strona h. Białystok
    Delegation_NS('old-bialystok', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
    // nowa strona h. Białystok
    Ms365_Subdomain('bialystok', 'zhp.pl'),
    Delegation_A('bialystok', '195.78.66.229'),

    Delegation_NS('kolno', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    // Delegation_NS('lomza', ['ns1.datasferix.pl.', 'ns2.datasferix.pl.']),
    Ms365_Subdomain('lomza', 'zhp.pl'),
    Delegation_NS('sokolka', ['ns1.getspace.us.', 'ns2.getspace.us.'])
);
