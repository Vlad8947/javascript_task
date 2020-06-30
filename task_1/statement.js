let creditAudience = 30;

const format = new Intl.NumberFormat("ru-RU",
        {   style: "currency", 
            currency: "RUB",
            minimumFractionDigits: 2
        }).format;
        

function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Счет для ${invoice.customer}:\n`;
    
    for (let perf of invoice.performances) {
        const play = plays[perf.playId];
        let thisAmount = 0;

        switch (play.type) {
            case Tragedy.name:
                thisAmount = Tragedy.calcAmount(perf.audience);
                break;
            case Comedy.name:
                thisAmount = Comedy.calcAmount(perf.audience);
                // Дополнительный бонус за каждые несколько комедий
                volumeCredits += Comedy.calcCredits(perf.audience);
                break;
            default:
                throw new Error('неизвестный тип: ${play.type}');
        }

        // Бонус за публику
        volumeCredits += Math.max(perf.audience - creditAudience, 0);
        totalAmount += thisAmount;

        // Вывод строки счета
        thisAmount = format(thisAmount / 100)
        result += `\t${play.name}: ${thisAmount} (${perf.audience} мест)\n`;
    }

    totalAmount = format(totalAmount/100);
    result += `\nИтого с вас ${totalAmount}\n`;
    result += `Вы заработали ${volumeCredits} бонусов\n`;
    return result;
}