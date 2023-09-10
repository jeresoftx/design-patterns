class ICelebrity
  #@abstract
  def autograph(name)
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end
end

class Celebrity < ICelebrity
  def autograph(name)
    puts "With love to #{name}, Jeresoft!"
  end
end

class Bodyguard < ICelebrity
  def initialize(celebrity)
    @celebrity = celebrity
  end

  def autograph(name)
    return unless check_access

    @celebrity.autograph(name)
    log_access
  end

  # @return [Boolean]
  def check_access
    puts 'Checking access prior to firing a real request.'
    true
  end

  def log_access
    print 'Logging the time of request.'
  end
end


puts 'Celebrity:'
celebrity = Celebrity.new
celebrity.autograph('Maia')

puts "\n"

puts 'Bodyguard:'
bodyguard = Bodyguard.new(celebrity)
bodyguard.autograph('Ben')