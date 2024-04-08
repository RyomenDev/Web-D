#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int a, b;
        cin >> a >> b;
        if (a % 2 != 0 && b % 2 != 0)
            // can't cut into two rectangle
            cout << "NO" << endl;
        else if (a % 2 == 0 && b % 2 == 0)
            // can be cut  and if one part gives same rectangle the other will give different
            cout << "Yes" << endl;
        else
        {
            int newlen = a % 2 == 0 ? a : b;
            int newbre = a % 2 == 0 ? b : a;
            newlen = newlen / 2;
            // length = brearth => same rectangle formed.
            if (newlen == newbre)
                cout << "No" << endl;
            else
                cout << "Yes" << endl;
        }
    }
    return 0;
}

