using System;

namespace Backend.Models;

// Tabela principal de usuários
public class User
{
    public int Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;

    // Nome completo - vai aparecer no dashboard (possivelmente)
    public string FullName { get; set; } = string.Empty;

   // Controle de verificação de email
   public bool IsEmailConfirmed { get; set; } = false;
   public string EmailVerificationToken { get; set; }
   public DateTime EmailVerificationTokenExpiry { get; set; }

   // Soft delete padrão - não perder o histórico
   public bool IsDeleted { get; set; } = false;
   public DateTime CreatedAt { get; set; }
   public DateTime UpdatedAt { get; set; }
   public DateTime DeletedAt { get; set; }

   // Relacionamento - facilitar consultas
   public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
   public virtual ICollection<Category> Categories { get; set; } = new List<Category>();
   public virtual ICollection<Goal> Goals { get; set; } = new List<Goal>();
   public virtual ICollection<CreditCard> CreditCards { get; set; } = new List<CreditCard>();
}