using System;

namespace Backend.Models;

// Controla parcelas de uma compra no cartão
public class Installment
{
    public int Id { get; set; }

    public int TotalInstallment { get; set; } // total de parcelas
    public int CurrentInstallment { get; set; } // qual parcela atual

    public decimal InstallmentValue { get; set; } // valor de cada parcela

    public DateTime DueDate { get; set; } // data de vencimento da parcela atual
    public bool IsPaid { get; set; } = false; // se já foi paga

    public int CreditCardId { get; set; }
    public virtual CreditCard CreditCard { get; set; } = null!;

    public int TransactionId { get; set; }
    public virtual Transaction Transaction { get; set; } = null!;

    public DateTime CreateAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }
}