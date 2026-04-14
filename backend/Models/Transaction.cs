using System;

namespace Backend.Models;

// Representa uma movitmentação financeira (entrada ou saída)
public class Transaction
{
    public int Id { get; set; }
    public decimal Amount { get; set; } // Positivo = receita, Negativo = despesa?

    // Uma ideia é deixar o positivo em amount e income/expense em type - Alice
    public decimal Value { get; set; }
    public string Type { get; set; } = "Expense"; // Income ou Expense
    public string Description { get; set; } = string.Empty;
    public DateTime Date { get; set; } = DateTime.UtcNow;

    // Relacionamentos
    public int UserId { get; set; }
    public virtual User User { get; set; } = null!;

    public int CategoryId { get; set; }
    public virtual Category Category { get; set; }

    // se for transação parcelada, aponta pro cartão e parcelamento
    public int CreditCardId { get; set; }
    public virtual CreditCard CreditCard { get; set; }

    public int? InstallmentId { get; set; }
    public virtual Installment? Installment { get; set; }

    // Se for um cofre (meta)
    public int GoalId { get; set; }
    public virtual Goal Goal { get; set; }

    // Transação recorrente, qual o intervalo
    public bool IsRecurring { get; set; } = false;
    public string RecurringInterval { get; set; } // monthly, yearly

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }
}