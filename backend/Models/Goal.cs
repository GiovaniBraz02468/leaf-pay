using System;

namespace Backend.Models;

// Cofres/metas: guardar dinheiro pra um objeto especifico
public class Goal
{
    public int Id { get; set;}

    public string Name { get; set; } = string.Empty;
    public string Description { get; set; }

    public decimal TargetAmount { get; set; } // quanto quer juntar
    public decimal CurrentAmount { get; set; } // quanto já tem

    public DateTime TargetDate {get; set; } // data opcional pra atingir a meta

    public int UserId { get; set; }
    public virtual User User { get; set; } = null!;

    // Soft delete
    public bool IsDeleted { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}