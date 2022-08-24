int[] Arr = new int[5];
Random rand = new Random();
Console.WriteLine("So phan tu trong mang: ", Arr.Length);
System.Console.WriteLine("--------------------------------");
System.Console.WriteLine("Truoc khi sap xep: ");
for (int i = 0; i < Arr.Length; i++)
{
    Arr[i] = rand.Next(1, 100);
    System.Console.Write(Arr[i] + " ");
}
System.Console.WriteLine();
SapxepBubbleSort(Arr);
System.Console.WriteLine("Sau khi sap xep: ");
foreach (var item in Arr)
{
    System.Console.Write(item + " ");
}


void SapxepBubbleSort(int[] arr)
{
    int n = arr.Length;
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = n - 1; j > i; j--)
        {
            if (arr[j] < arr[j - 1])
            {
                Swap(arr[j], arr[j - 1]);
            }
        }
    }
}
void Swap(int a, int b)
{
    int temp = a;
    a = b;
    b = temp;
}