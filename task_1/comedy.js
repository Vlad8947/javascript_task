class Comedy {

    static name = "comedy";
    static amount = 30000;
    static ticketAmount = 300;
    static baseAudience = 20;
    static extraAudienceAmount = 10000;
    static extraTicketAmount = 500;
    static creditAudience = 10;

    static calcAmount(audience) {
        let tmpAmount = Comedy.amount + Comedy.ticketAmount * audience;
        if (audience > Comedy.baseAudience) {
            tmpAmount += Comedy.extraAudienceAmount + Comedy.extraTicketAmount * (audience - Comedy.baseAudience);
        }
        return tmpAmount;
    }

    static calcCredits(audience) {
        return Math.floor(audience / Comedy.creditAudience);
    }

}