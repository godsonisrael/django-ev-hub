from inertia import render


def dashboard(request):
    props = {
        'message': 'Hey th'
    }
    return render(request, "Dashboard", props)


def stations(request):
    props = {
        'message': 'from stations'
    }
    return render(request, "Stations", props)


def myTrips(request):
    props = {
        'message': 'From myTrips'
    }
    return render(request, "MyTrips", props)


def subscriptions(request):
    props = {
        'message': 'Subscriptions'
    }
    return render(request, "SubscriptionPlan", props)