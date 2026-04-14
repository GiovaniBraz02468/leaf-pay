using System;

namespace Backend.Models;

// Categorias podem ser Receita ou Despesa
public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty; // Alimentação, Salário , etc.

    // Tipo Income ou Expense
    // Importante para relatórios e limites de gasto
    public string Type { get; set; } = "Expense";

    // Icone pra mostrar no front
    public string Icon { get; set; }

    // Cor em hexadecimal
    public string Color { get; set; }

    // Limite mensal opcional - se definir, o sistema vai avisar
    public decimal MonthlyLimit { get; set; }

    // Dono da categoria
    public int UserId { get; set; }
    public virtual User User { get; set; } = null!;

    // Soft delete
    public bool IsDeleted { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();

}