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

    public int CreditCard { get; set; }
    public virtual CreditCard CreditCard { get; set; } = null!;

    public int TransactionId { get; set; } // link com a transação original
    public virtual Transaction Transaction { get; set; }

    public DateTime CreateAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }
}