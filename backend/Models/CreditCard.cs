using System;

namespace Backend.Models;

// Cartões de crédiot dos usuários
public class CreditCard
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty; // Nubank, Bradesco, e etc.
    public string Brand { get; set; } // Visa, mastercard

    public decimal Limit { get; set; } // Limite total do cartão
    public int ClosingDay { get; set; } // Dia de fechamento da fatura
    public int DueDay { get; set; } // Dia do vencimento

    public int UserId { get; set; }
    public virtual User User { get; set; } = null!;

    // Soft delete
    public bool IsDeleted { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
    public virtual ICollection<Installment> Installments { get; set; } = new List<Installment>();
}