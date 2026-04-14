using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<CreditCard> CreditCards { get; set; }
    public DbSet<Goal> Goals { get; set; }
    public DbSet<Installment> Installments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuração para evitar erros de ciclo em deletes (Cascade)
        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }

        // Configurando a relação 1 para 1 entre Transaction e Installment
        modelBuilder.Entity<Transaction>()
            .HasOne(t => t.Installment)
            .WithOne(i => i.Transaction)
            .HasForeignKey<Installment>(i => i.TransactionId);

        base.OnModelCreating(modelBuilder);
    }
}