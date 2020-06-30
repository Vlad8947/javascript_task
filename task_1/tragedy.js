class Tragedy {

    static name = "tragedy";
    static amount = 40000;
    static extraAudienceAmount = 1000;
    static baseAudience = 30;

    static calcAmount(audience) {
        let tmpAmount = Tragedy.amount;
        if (audience > Tragedy.baseAudience) {
            tmpAmount += Tragedy.extraAudienceAmount * (audience - Tragedy.baseAudience);
        }
        return tmpAmount;
    }

}