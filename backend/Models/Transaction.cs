using System;

namespace Backend.Models;

public class Transaction
{
    public int Id { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }

    public int UserId { get; set; }
}